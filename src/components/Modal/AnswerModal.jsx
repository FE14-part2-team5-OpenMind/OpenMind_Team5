import React from "react";
import {
  Overlay,
  ModalContainer,
  ModalContent,
  CloseButton,
} from "../../styles/answerModalStyle";
import { Link } from "react-router-dom";

const AnswerModal = ({ isOpen, onClose, userId, questionCounts }) => {
  if (!isOpen || !userId || userId.length === 0) return null;

  return (
    <Overlay>
      <ModalContainer>
        <ModalContent>
          {userId.map((feed, index) => (
            <div key={index}>
              <Link to={`/post/${feed.id}/answer`}>{`${feed.이름} (질문 개수: ${
                questionCounts[feed.id] || 0
              })`}</Link>
            </div>
          ))}
        </ModalContent>
        <CloseButton onClick={onClose}>닫기</CloseButton>
      </ModalContainer>
    </Overlay>
  );
};

export default AnswerModal;
