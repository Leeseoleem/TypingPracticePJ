import React, { useState } from "react";

const GameplayPage = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const text = "차자기로 글씨가 써지는 효과를 확인하세요!";

  const startTyping = () => {
    setDisplayedText(""); // 초기화
    setIsTyping(true);

    let index = 0;
    const type = () => {
      if (index < text.length) {
        setDisplayedText((prev) => prev + text.charAt(index));
        index++;
        setTimeout(type, 100); // 타이핑 속도 조절
      } else {
        setIsTyping(false); // 타이핑 종료
      }
    };
    type();
  };

  return (
    <div className="container">
      <h1>모던 타이핑 게임</h1>
      <div className="typing-effect">
        {displayedText}
        {isTyping && <span className="cursor" />}
      </div>
      <button onClick={startTyping}>게임 시작</button>
    </div>
  );
};

export default GameplayPage;
