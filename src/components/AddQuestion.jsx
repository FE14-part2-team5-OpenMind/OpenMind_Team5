import React from "react";
import styled from "styled-components";

const Button = styled.button`
  position: fixed;
  bottom: 24px;
  right: 24px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 208px;
  height: 54px;
  background-color: var(--brown40);
  color: var(--gray10);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 200px;
  border: none;
  font: var(--body1-regular);
  cursor: pointer;
  transition: transform 0.2s ease-in-out;

  @media (max-width: 767px) {
    width: 123px;
    height: 54px;
    font: var(--caption1-regular);
  }

  &:hover {
    transform: scale(1.05);
  }
`;

const AddQuestion = () => {
  return <Button>질문 작성하기</Button>;
};

export default AddQuestion;
