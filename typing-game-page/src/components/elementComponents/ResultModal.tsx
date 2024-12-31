import React from "react";
import Modal from "react-modal"; // modal component 사용
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { theme } from "../../styles/theme";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "white", // 모달 배경색
    border: "1px solid #ccc", // 테두리 스타일
    borderRadius: "10px", // 테두리 둥글게
    padding: "24px", // 내부 여백
    width: "300px",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.45)", // 어두운 배경 설정
  },
};

const inputStyle = {
  paddingBlock: 12,
  paddingInline: 16,
  fontSize: 14,
  borderRadius: 5,
  border: "2px solid #ccc" /* 기본 border 색상 */,
};

interface LoginModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  emailText?: string | number;
  passwordText?: string | number;
  onChangeEmail: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onChangePW: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const ResultModal: React.FC<LoginModalProps> = ({
  isOpen,
  onRequestClose,
  emailText,
  passwordText,
  onChangeEmail,
  onChangePW,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      ariaHideApp={false} // 필요 시 접근성 설정
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <h2>로그인</h2>
        <div onClick={onRequestClose}>
          <CloseRoundedIcon />
        </div>
      </div>
      <form>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginBottom: 12,
          }}
        >
          <input
            type="email"
            placeholder="아이디"
            value={emailText}
            onChange={onChangeEmail}
            style={{
              ...inputStyle,
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginBottom: 24,
          }}
        >
          <input
            type="password"
            placeholder="비밀번호"
            style={inputStyle}
            value={passwordText}
            onChange={onChangePW}
          />
        </div>

        <button
          style={{
            width: "100%",
            padding: 12,
            borderRadius: 20,
            borderWidth: 0,
            marginBottom: 12,
            backgroundColor: theme.colors.main40,
            color: "#fff",
            fontFamily: "DNFBitBitv2",
            cursor: "pointer",
          }}
          type="submit"
        >
          로그인
        </button>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            fontFamily: "Pretendard-Regular",
            fontSize: 14,
            letterSpacing: -0.2,
          }}
        >
          <p
            style={{
              color: "#333",
              marginRight: 4,
            }}
          >
            아직 회원이 아니신가요?
          </p>
          <div
            style={{
              userSelect: "none",
              cursor: "pointer",
              color: theme.colors.main40,
            }}
          >
            <p>회원 가입하기</p>
          </div>
        </div>
      </form>
    </Modal>
  );
};

export default ResultModal;
