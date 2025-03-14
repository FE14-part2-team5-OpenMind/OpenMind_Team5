// 파일 위치: src/components/AnswerForm.jsx

import React, { useState } from "react";
// 1번 프로젝트에 이미 구현된 InputTextArea 컴포넌트를 사용
// 파일 경로는 1번 프로젝트의 구조에 맞춰 './common/InputTextArea/InputTextArea.jsx'로 지정
import InputTextArea from "./common/InputTextArea/InputTextArea.jsx";

// API 호출 관련 파일의 경로를 1번 프로젝트에 맞게 수정
// 1번 프로젝트의 api 파일은 'src/api/api.js'에 있으므로, '../api/api'로 import
import * as api from "../api/api";

// 스타일링을 위한 CSS 파일을 import
// 이 파일은 같은 폴더(src/components)에 위치하도록 생성
import "./StyleAnswerForm.css";

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
        // 답변 수정 API 호출 (1번 프로젝트의 api.updateAnswer 함수가 구현되어 있어야 함)
        const response = await api.updateAnswer({ questionId, answer });
        onAnswerSubmit(response.data);
      } else {
        // 새 답변 등록 API 호출 (1번 프로젝트의 api.postAnswer 함수가 구현되어 있어야 함)
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
