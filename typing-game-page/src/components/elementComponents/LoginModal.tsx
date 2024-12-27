import React from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

interface LoginModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onRequestClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      ariaHideApp={false} // 필요 시 접근성 설정
    >
      <h2>로그인</h2>
      <form>
        <div>
          <label>이메일</label>
          <input type="email" placeholder="이메일 입력" />
        </div>
        <div>
          <label>비밀번호</label>
          <input type="password" placeholder="비밀번호 입력" />
        </div>
        <button type="submit">로그인</button>
        <button type="button" onClick={onRequestClose}>
          닫기
        </button>
      </form>
    </Modal>
  );
};

export default LoginModal;
