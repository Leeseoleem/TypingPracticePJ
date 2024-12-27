import React, { useEffect, useState } from "react";
import "./MainPage.module.css";
import { theme } from "../styles/theme";
// component
import LoginModal from "./elementComponents/LoginModal";
// Icon 관련
import WarningRoundedIcon from "@mui/icons-material/WarningRounded";
import StarRoundedIcon from "@mui/icons-material/StarRounded";

const MainPage = () => {
  const [login, setLogin] = useState<boolean>(false);
  const [loginCheck, setLoginCheck] = useState<string>("");
  const isLoggined = (): void => {
    login
      ? setLoginCheck("000님의 접속이 확인되었습니다.")
      : setLoginCheck("로그인이 필요합니다...");
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    isLoggined();
  }, [login]);

  return (
    <div className="container">
      <header className="header">
        <div
          className="user-login"
          onClick={() => {
            setLogin(!login);
          }}
        >
          {!login ? (
            <WarningRoundedIcon
              style={{
                color: theme.colors.main50,
                fontSize: 60,
                marginRight: 30,
              }}
            />
          ) : (
            <StarRoundedIcon
              style={{
                color: theme.colors.main30,
                fontSize: 60,
                marginRight: 30,
              }}
            />
          )}
          <p className="user-check">{loginCheck}</p>
        </div>
        <div className="dot-container">
          <div className="dot" />
          <div className="dot" />
          <div className="dot" />
        </div>
      </header>
      <main className="body-container">
        <h1 className="main-title">도각도각!</h1>
        <button className="btn">시작하기</button>
        <button className="btn">기록보기</button>
      </main>
      <LoginModal isOpen={isModalOpen} onRequestClose={closeModal} l />
    </div>
  );
};

export default MainPage;
