import { useState } from "react";
import styled from "styled-components";
import { postQuestion } from "../services/postQuestion";

export const TextArea = styled.textarea`
  display: flex;
  max-width: 532px;
  width: 100%;
  height: 180px;
  padding: 16px;
  border: none;
  border-radius: 8px;
  background: var(--gray20);
  white-space: pre-wrap;
  resize: none;
  &::placeholder {
    color: var(--gray40);
  }
  &:focus {
    /* outline: none; */
    outline: 1px solid var(--brown40);
  }
  @media (max-width: 480px) {
    max-width: 279px;
    height: 358px;
  }
`;

export const SendingButton = styled.button`
  width: 100%;
  background: var(--brown30);
  color: var(--gray10);
  border-radius: 8px;
  border: none;
  margin-top: 8px;
  padding: 12px 24px;
  cursor: pointer;

  @media (max-width: 480px) {
    max-width: 279px;
  }

  ${({ isValid }) =>
    isValid === true
      ? `background: var(--brown40)`
      : `background: var(--brown30)`}
`;

const TextForm = ({
  placeholder,
  buttonText,
  subject_id,
  mode,
  onClose,
  setSend,
}) => {
  const [textValue, setTextValue] = useState("");
  const [isValid, setIsValid] = useState(false);

  const handleTextChange = (e) => {
    // TextArea 상태 변화
    const nextValue = e.target.value;
    setTextValue(nextValue);
    // 공백 or 빈 문자열인 경우
    setIsValid(nextValue.trim() !== "");
  };

  const handleSubmit = async () => {
    if (!isValid) return;
    try {
      if (mode === "question") {
        await postQuestion({ subject_id, content: textValue });
        console.log("질문 등록 완료!");
        onClose();
        setSend(true);
      }
      //답변 부분 (mode == "answer")
    } catch (error) {
      console.log("질문 등록 실패");
      console.error(error);
    }
  };

  return (
    <>
      <TextArea
        placeholder={placeholder}
        value={textValue}
        onChange={handleTextChange}
      />
      <SendingButton isValid={isValid} onClick={handleSubmit}>
        {buttonText}
      </SendingButton>
    </>
  );
};

export default TextForm;
