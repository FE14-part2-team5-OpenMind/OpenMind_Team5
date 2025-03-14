// 파일 위치: src/components/AnswerForm.jsx

import React, { useState } from "react";
// 수정된 import 경로: src/components/InputTextArea/InputTextArea.jsx
import InputTextArea from "./InputTextArea/InputTextArea.jsx";

// API 호출 관련 파일을 named import 방식으로 수정
import * as api from "../api/api";

// CSS 파일의 경로를 src/StyleAnswerForm.css 로 변경
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
      if (isEditing) {
        // 답변 수정 API 호출 (api.updateAnswer 함수)
        const response = await api.updateAnswer({ questionId, answer });
        onAnswerSubmit(response.data);
      } else {
        // 새 답변 등록 API 호출 (api.postAnswer 함수)
        const response = await api.postAnswer({ questionId, answer });
        onAnswerSubmit(response.data);
      }
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
      <button type="submit">{isEditing ? "답변 수정" : "답변 등록"}</button>
    </form>
  );
};

export default AnswerForm;
