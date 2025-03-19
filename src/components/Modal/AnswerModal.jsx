import React from "react";
import styled from "styled-components";
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

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContainer = styled.div`
  display: flex;
  gap: 40px;
  flex-direction: column;
  justify-content: center;
  width: 450px;
  height: 280px;
  background: white;
  border-radius: 10px;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  font-size: 15px;
  align-items: center;
  justify-content: center;
  max-height: 150px;
  overflow-y: auto;

  > div a {
    color: black;
    display: inline;
    text-decoration: none;
  }

  > div a:hover {
    color: var(--blue50);
  }
`;

const CloseButton = styled.button`
  width: 50px;
  height: 30px;
  margin: 0 auto;
  background: var(--blue50);
  color: var(--gray10);
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
