import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const AnswerModal = ({ isOpen, onClose, userId }) => {
  if (!isOpen || !userId || userId.length === 0) return null;

  return (
    <Overlay>
      <ModalContainer>
        <ModalContent>
          {userId.map((feed, index) => (
            <Link key={index} to={`/post/${feed.id}/answer`}>
              {feed.이름}
            </Link>
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
  gap: 20px;
  flex-direction: column;
  justify-content: center;
  width: 350px;
  height: 200px;
  background: white;
  border-radius: 10px;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 20px;
  align-items: center;
  justify-content: center;

  > a {
    color: black;
    display: inline;
    text-decoration: none;
  }

  > a:hover {
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
