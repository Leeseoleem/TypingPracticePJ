import React, { useEffect, useState } from "react";
import "./MainPage.module.css";
import { theme } from "../styles/theme";
import styles from "./MainPage.module.css";
import "../styles/theme.css";
// component
import LoginModal from "./elementComponents/LoginModal";
// Icon 관련
import WarningRoundedIcon from "@mui/icons-material/WarningRounded";
import StarRoundedIcon from "@mui/icons-material/StarRounded";

const MainPage = () => {
  const [emailText, setEmailText] = useState("");
  const [passwordText, setPasswordText] = useState("");

  const onChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmailText(event.target.value);
  };

  const onChangePW = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordText(event.target.value);
  };

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
    <div className={styles.container}>
      <header className={styles.header}>
        <div
          className={styles.userLogin}
          onClick={() => {
            setLogin(!login);
            !login && openModal();
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
          <p className={styles.userCheck}>{loginCheck}</p>
        </div>
        <div className={styles.dotContainer}>
          <div className={styles.dot} />
          <div className={styles.dot} />
          <div className={styles.dot} />
        </div>
      </header>
      <main className={styles.bodyContainer}>
        <h1 className={styles.mainTitle}>도각도각!</h1>
        <button className={styles.btn}>시작하기</button>
        <button className={styles.btn}>기록보기</button>
      </main>
      <LoginModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        emailText={emailText}
        passwordText={passwordText}
        onChangeEmail={onChangeEmail}
        onChangePW={onChangePW}
      />
    </div>
  );
};

export default MainPage;
