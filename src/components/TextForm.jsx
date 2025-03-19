import styled from "styled-components";
import useTextForm from "../hooks/useTextForm";

export const TextArea = styled.textarea`
  display: flex;
  /* max-width: 532px; */
  margin-top: 4px;
  width: 100%;
  height: 180px;
  padding: 16px;
  border: none;
  border-radius: 8px;
  background: var(--gray20);
  font: var(--body3-bold);
  white-space: pre-wrap;
  resize: none;
  &::placeholder {
    color: var(--gray40);
  }
  &:focus {
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
  font: var(--body3-bold);
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
      : `background: var(--brown30)`};
`;

const TextForm = ({
  placeholder,
  buttonText,
  id,
  mode,
  onClose,
  setSend,
  setOffset,
  setLocalAnswer,
  setDone,
  isEdit,
  setIsEdit,
  setEditHistory,
  localAnswer,
}) => {
  const { textValue, isValid, handleTextChange, handleSubmit } = useTextForm({
    mode,
    id,
    onClose,
    setSend,
    setOffset,
    setLocalAnswer,
    setDone,
    isEdit,
    setIsEdit,
    setEditHistory,
    localAnswer,
  });

  console.log(id);

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
