import { useState, useEffect } from "react";
import * as answerService from "../services/answerService";

const useTextForm = ({
  mode,
  id,
  onClose,
  setSend,
  setOffset,
  initialContent,
  answerId,
  isEditing,
}) => {
  const [textValue, setTextValue] = useState(initialContent || "");
  const [isValid, setIsValid] = useState(
    initialContent?.trim() !== "" || false
  );

  useEffect(() => {
    setTextValue(initialContent || "");
    setIsValid(initialContent?.trim() !== "" || false);
  }, [initialContent]);

  const handleTextChange = (e) => {
    const nextValue = e.target.value;
    setTextValue(nextValue);
    setIsValid(nextValue.trim() !== "");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isValid) return;
    try {
      if (mode === "question") {
        console.log("질문 제출 시도:", { subject_id: id, content: textValue });
        const response = await answerService.postQuestion({
          subject_id: id,
          content: textValue,
        });
        console.log("질문 등록 응답:", response);
        onClose();
        setSend(true);
        setOffset(0);
      } else if (mode === "answer") {
        if (isEditing && answerId) {
          const response = await answerService.updateAnswer({
            answerId,
            answerText: textValue,
            isRejected: false,
          });
          console.log("답변 수정 응답:", response);
          if (!response || !response.id) {
            throw new Error("답변 수정 응답이 올바르지 않습니다.");
          }
        } else {
          const response = await answerService.submitAnswer({
            questionId: id,
            answerText: textValue,
            isRejected: false,
          });
          console.log("답변 등록 응답:", response);
          if (!response || !response.id) {
            throw new Error("답변 등록 응답이 올바르지 않습니다.");
          }
        }
        onClose();
        setSend(true);
        setOffset(0);
      }
    } catch (error) {
      console.error(
        `${mode === "question" ? "질문" : "답변"} ${
          isEditing ? "수정" : "등록"
        } 실패:`,
        error.message
      );
      throw error;
    }
  };

  return {
    textValue,
    isValid,
    handleTextChange,
    handleSubmit,
  };
};

export default useTextForm;
