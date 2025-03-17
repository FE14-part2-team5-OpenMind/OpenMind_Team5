import styled from "styled-components";
import useTextForm from "../hooks/useTextForm";

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;
`;

export const TextArea = styled.textarea`
  display: flex;
  width: 100%;
  max-width: 612px;
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
    outline: 1px solid var(--brown40);
  }
  @media (max-width: 480px) {
    max-width: 321px;
    height: 358px;
  }
`;

export const SendingButton = styled.button`
  width: 100%;
  max-width: 612px;
  background: var(--brown30);
  color: var(--gray10);
  border-radius: 8px;
  border: none;
  margin-top: 8px;
  padding: 12px 24px;
  cursor: pointer;
  min-height: 48px;
  line-height: 24px;
  text-align: center;

  @media (max-width: 480px) {
    max-width: 321px;
    min-height: 48px;
  }

  ${({ isValid }) =>
    isValid === true
      ? `background: var(--brown40); color: var(--gray10)`
      : `background: var(--brown30); color: var(--gray10)`}
`;

const TextForm = ({
  placeholder,
  buttonText,
  id,
  mode,
  onClose,
  setSend,
  setOffset,
  initialContent = "",
  answerId,
  isEditing,
}) => {
  const { textValue, isValid, handleTextChange, handleSubmit } = useTextForm({
    mode,
    id,
    onClose,
    setSend,
    setOffset,
    initialContent,
    answerId,
    isEditing,
  });

  // 수정: 제출 후 응답 데이터를 onClose로 전달
  const onSubmit = async () => {
    const response = await handleSubmit(); // handleSubmit이 응답을 반환하도록 가정
    if (response) {
      onClose(response); // 응답 데이터를 부모로 전달
    }
  };

  return (
    <FormContainer>
      <TextArea
        placeholder={placeholder}
        value={textValue}
        onChange={handleTextChange}
      />
      <SendingButton isValid={isValid} onClick={onSubmit}>
        {isValid ? (
          buttonText
        ) : (
          <span style={{ visibility: "hidden" }}>{buttonText}</span>
        )}
      </SendingButton>
    </FormContainer>
  );
};

export default TextForm;
