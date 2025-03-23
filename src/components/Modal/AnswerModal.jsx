import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import {
  Overlay,
  ModalContainer,
  ModalContent,
  CloseButton,
} from "../../styles/answerModalStyle";
import { Link } from "react-router-dom";

const modalRoot = document.getElementById("modal-root");

const AnswerModal = ({ isOpen, onClose, userId, questionCounts }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // 모달 열릴 때 스크롤 방지
    }
    return () => {
      document.body.style.overflow = "auto"; // 모달 닫힐 때 원래대로 복원
    };
  }, [isOpen]); // `isOpen`이 변경될 때만 실행

  // **모달이 열려 있지 않으면 렌더링하지 않음**
  if (!isOpen || !userId || userId.length === 0) return null;

  // **백그라운드 클릭 시 모달 닫기**
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose(); // Overlay(배경) 클릭 시 모달 닫기
    }
  };

  return ReactDOM.createPortal(
    <Overlay onClick={handleOverlayClick}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <ModalContent>
          {userId.map((feed, index) => (
            <div key={index}>
              <Link to={`/post/${feed.id}/answer`}>
                {`${feed.이름} (질문 개수: ${questionCounts[feed.id] || 0})`}
              </Link>
            </div>
          ))}
        </ModalContent>
        <CloseButton onClick={onClose}>닫기</CloseButton>
      </ModalContainer>
    </Overlay>,
    modalRoot
  );
};

export default AnswerModal;
