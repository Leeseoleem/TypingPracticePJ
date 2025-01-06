import React, { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";

const GameplayPage = () => {
  const [targetPhrase, setTargetPhrase] = useState(
    "타임 투 트레이스 유 모든게 사라져도 난 너를 포기 못해 난 너를 찾을거야 나는 절대 잊지 못해"
  ); // 타이핑 할 문장
  const [userInput, setUserInput] = useState(""); // 사용자 입력 텍스트
  const [startTime, setStartTime] = useState<number | null>(null); // 게임 시작 시간
  const [gameStart, setGameStart] = useState<boolean>(false); // 게임 시작 여부
  const [gameOver, setGameOver] = useState<boolean>(false); // 게임 종료 여부

  const [elapsedTime, setElapsedTime] = useState<number>(0); // 경과 시간(초)
  const [wpm, setWpm] = useState<number>(0); // 타이핑 속도 (글자 수 기반)
  const [accuracy, setAccuracy] = useState<number>(100); // 정확도

  // 타이머
  useEffect(() => {
    if (!startTime || gameOver) return;

    const intervalId = setInterval(() => {
      const elapsed = Math.floor((Date.now() - startTime) / 1000); // 경과 시간 계산
      setElapsedTime(elapsed);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [startTime, gameOver]);

  // WPM 계산 (한국어 글자 수 기준)
  useEffect(() => {
    if (!startTime || gameOver) return;

    const intervalId = setInterval(() => {
      const elapsedMinutes = (Date.now() - startTime) / 60000; // 경과 시간(분)
      const charCount = userInput.length; // 입력된 총 글자 수
      setWpm(Math.floor(charCount / elapsedMinutes)); // 분당 글자 수 계산
    }, 1000);

    return () => clearInterval(intervalId);
  }, [startTime, userInput, gameOver]);

  // 정확도 계산
  useEffect(() => {
    if (gameOver) return;

    const inputLength = userInput.length;
    const correctChars = targetPhrase
      .slice(0, inputLength)
      .split("")
      .filter((char, index) => char === userInput[index]).length;

    setAccuracy(
      inputLength === 0 ? 100 : Math.floor((correctChars / inputLength) * 100)
    );
  }, [userInput, targetPhrase, gameOver]);

  // 입력 핸들러
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (gameOver) return; // 게임 종료 상태에서는 입력 무시

    const value = e.target.value;
    setUserInput(value);

    if (!startTime) {
      setStartTime(Date.now());
      setGameStart(true);
    }
  };

  // 게임 종료 조건
  useEffect(() => {
    if (userInput === targetPhrase) {
      setGameStart(false);
      setGameOver(true); // 게임 종료
      console.log("게임이 종료되었습니다");
    }
  }, [userInput, targetPhrase]);

  // 문장 렌더링 (오류 강조)
  const renderHighlightedText = () => {
    return targetPhrase.split("").map((char, index) => {
      const isCorrect = userInput[index] === char;
      const isMistyped = userInput[index] && !isCorrect;

      return (
        <span
          key={index}
          style={{
            color: isCorrect ? "green" : isMistyped ? "red" : "black",
          }}
        >
          {char}
        </span>
      );
    });
  };

  const fetchSentences = async () => {
    try {
      const eng = doc(db, "sentences", "englishSentences");
      const engSnap = await getDoc(eng);

      const engSt = engSnap.exists() ? engSnap.data() : "내용이 없습니다";
      console.log("영어 문장:", engSt);
    } catch (error) {
      console.error("불러오기에 실패하였습니다.");
    }
  };

  useEffect(() => {
    fetchSentences();
  }, []);

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h1>Typing Game</h1>
      <div style={{ marginBottom: "20px", fontSize: "24px" }}>
        {renderHighlightedText()}
      </div>
      <input
        type="text"
        value={userInput}
        onChange={handleInputChange}
        disabled={gameOver} // 게임 종료 시 입력 비활성화
        style={{
          width: "100%",
          padding: "10px",
          fontSize: "18px",
          border: "1px solid #ccc",
          borderRadius: "5px",
        }}
      />
      <div style={{ marginTop: "20px" }}>
        <p>타수(WPM): {wpm}</p>
        <p>정확도: {accuracy}%</p>
        <p>
          진행 시간: {Math.floor(elapsedTime / 60)}분 {elapsedTime % 60}초
        </p>
      </div>
      {gameOver && <p style={{ color: "red" }}>게임이 종료되었습니다!</p>}
    </div>
  );
};

export default GameplayPage;
