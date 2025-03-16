import { useState, useEffect } from "react";
import * as answerService from "../services/answerService"; // 모듈 임포트

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

  const handleSubmit = async () => {
    if (!isValid) return;
    try {
      if (mode === "question") {
        await answerService.postQuestion({
          subject_id: id,
          content: textValue,
        });
        console.log("질문 등록 완료!");
        onClose();
        setSend(true);
        setOffset(0);
      } else if (mode === "answer") {
        if (isEditing && answerId) {
          // 수정 모드
          const response = await answerService.updateAnswer(
            answerId,
            textValue,
            false
          );
          console.log("답변 수정 응답:", response); // 응답 디버깅
          if (!response || !response.id) {
            throw new Error("답변 수정 응답이 올바르지 않습니다.");
          }
        } else {
          // 답변 추가 모드
          const response = await answerService.submitAnswer(
            id,
            textValue,
            false
          );
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
