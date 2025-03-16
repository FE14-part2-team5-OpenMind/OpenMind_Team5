import styled from "styled-components";
import useTextForm from "../hooks/useTextForm";

// 우측 정렬을 위한 컨테이너
const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end; /* 우측 정렬 (기존 유지) */
  width: 100%;
`;

export const TextArea = styled.textarea`
  display: flex;
  width: 100%;
  max-width: 612px; /* 기존 532px에서 15% 증가 */
  height: 180px;
  padding: 16px;
  border: none;
  border-radius: 8px;
  background: var(--gray20); /* "질문을 입력해주세요"와 동일 */
  white-space: pre-wrap;
  resize: none;
  &::placeholder {
    color: var(--gray40);
  }
  &:focus {
    outline: 1px solid var(--brown40);
  }
  @media (max-width: 480px) {
    max-width: 321px; /* 기존 279px에서 15% 증가 */
    height: 358px;
  }
`;

export const SendingButton = styled.button`
  width: 100%;
  max-width: 612px; /* 기존 532px에서 15% 증가 */
  background: var(--brown30);
  color: var(--gray10);
  border-radius: 8px;
  border: none;
  margin-top: 8px;
  padding: 12px 24px;
  cursor: pointer;
  min-height: 48px; /* 텍스트 유무와 상관없이 최소 높이 유지 */
  line-height: 24px; /* 텍스트 높이 조정 */
  text-align: center; /* 텍스트 중앙 정렬 */

  @media (max-width: 480px) {
    max-width: 321px; /* 기존 279px에서 15% 증가 */
    min-height: 48px; /* 반응형에서도 최소 높이 유지 */
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
  answerId, // 수정 시 사용할 answerId
  isEditing, // 수정 모드 플래그
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

  return (
    <FormContainer>
      <TextArea
        placeholder={placeholder}
        value={textValue}
        onChange={handleTextChange}
      />
      <SendingButton isValid={isValid} onClick={handleSubmit}>
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
