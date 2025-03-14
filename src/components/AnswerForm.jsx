// 파일 위치: src/components/AnswerForm.jsx

import React, { useState } from "react";
import InputTextArea from "./InputTextArea/InputTextArea.jsx";
import * as api from "../api/api";
// 스타일 파일을 src/StyleAnswerForm.css로 지정
import "../StyleAnswerForm.css";

const AnswerForm = ({
  questionId,
  onAnswerSubmit,
  initialAnswer = "",
  isEditing = false,
}) => {
  const [answer, setAnswer] = useState(initialAnswer);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let response;
      if (isEditing) {
        // 답변 수정 API 호출
        response = await api.updateAnswer({ questionId, answer });
      } else {
        // 새 답변 등록 API 호출
        response = await api.postAnswer({ questionId, answer });
      }
      onAnswerSubmit(response.data);
      setAnswer("");
    } catch (error) {
      console.error("답변 전송 실패:", error);
    }
  };

  return (
    <form className="answer-form" onSubmit={handleSubmit}>
      <InputTextArea
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        placeholder={isEditing ? "답변을 수정하세요" : "답변을 작성하세요"}
      />
      {/* (7) 버튼 텍스트를 ‘답변 완료’로 변경, isEditing일 때만 ‘답변 수정’으로 표시 */}
      <button type="submit">{isEditing ? "답변 수정" : "답변 완료"}</button>
    </form>
  );
};

export default AnswerForm;
