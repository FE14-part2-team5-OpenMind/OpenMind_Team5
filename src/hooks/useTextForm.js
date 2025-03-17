import { useState } from "react";
import {
  submitAnswer,
  updateAnswer,
  postQuestion,
} from "../services/answerService";

const useTextForm = ({
  mode,
  id,
  onClose,
  setSend,
  setOffset,
  initialContent = "",
  answerId,
  isEditing,
}) => {
  const [textValue, setTextValue] = useState(initialContent);
  const isValid = textValue.trim().length > 0;

  const handleTextChange = (e) => {
    setTextValue(e.target.value);
  };

  const handleSubmit = async () => {
    if (!isValid) return;

    try {
      let response;
      if (mode === "question") {
        response = await postQuestion({ subject_id: id, content: textValue });
        setSend(true);
        setOffset(0);
      } else if (mode === "answer") {
        if (isEditing) {
          response = await updateAnswer({
            answerId,
            answerText: textValue,
            isRejected: false,
          });
        } else {
          response = await submitAnswer({
            questionId: id,
            answerText: textValue,
            isRejected: false,
          });
        }
        setSend(true);
      }
      setTextValue("");
      return response; // 수정: 서버 응답 반환
    } catch (error) {
      console.error(`${mode} 제출 실패:`, error);
    }
  };

  return { textValue, isValid, handleTextChange, handleSubmit };
};

export default useTextForm;
