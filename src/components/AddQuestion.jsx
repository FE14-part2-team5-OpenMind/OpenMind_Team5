import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { useEffect } from "react";

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

const AddQuestion = ({ onClick }) => {
  const [buttonText, setButtonText] = useState("");

   const handleWriteQuestion = () => {
     onClick();
   };

  useEffect(() => {
    //창 크기가 모바일 일 때, 버튼 text 바꾸기
    const handleResize = () => {
      if (window.innerWidth <= 480) {
        setButtonText("질문 작성");
      } else {
        setButtonText("질문 작성하기");
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <Button onClick={handleWriteQuestion}>{buttonText}</Button>;
};

export default AddQuestion;
