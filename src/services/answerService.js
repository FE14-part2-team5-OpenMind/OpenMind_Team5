import axios from "axios";
const BASE_URL = "https://openmind-api.vercel.app/14-5";

// 답변 제출
export const submitAnswer = async (
  questionId,
  answerText,
  isRejected = false
) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/questions/${questionId}/answers/`,
      {
        content: answerText,
        isRejected,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log("답변 제출 성공:", response.data); // 성공 로그
    return response.data;
  } catch (error) {
    console.error("답변 제출 실패:", error.response?.data || error.message);
    throw new Error(
      `답변 제출 실패: ${error.response?.data?.message || error.message}`
    );
  }
};

// 답변 수정
export const updateAnswer = async (answerId, answerText, isRejected) => {
  try {
    const response = await axios.put(
      `${BASE_URL}/answers/${answerId}/`,
      {
        content: answerText,
        isRejected,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log("답변 수정 성공:", response.data); // 성공 로그
    return response.data;
  } catch (error) {
    console.error("답변 수정 실패:", error.response?.data || error.message);
    throw new Error(
      `답변 수정 실패: ${error.response?.data?.message || error.message}`
    );
  }
};

// 답변 삭제
export const deleteAnswer = async (answerId) => {
  try {
    const response = await axios.delete(`${BASE_URL}/answers/${answerId}/`);
    console.log("답변 삭제 성공:", response.data);
    return response.data;
  } catch (error) {
    console.error("답변 삭제 실패:", error.response?.data || error.message);
    throw new Error(
      `답변 삭제 실패: ${error.response?.data?.message || error.message}`
    );
  }
};

// 답변 조회
export const getAnswer = async (answerId) => {
  try {
    const response = await axios.get(`${BASE_URL}/answers/${answerId}/`);
    return response.data;
  } catch (error) {
    console.error("답변 조회 실패:", error.response?.data || error.message);
    throw new Error(
      `답변 조회 실패: ${error.response?.data?.message || error.message}`
    );
  }
};

// 질문 삭제
export const deleteQuestion = async (questionId) => {
  try {
    const response = await axios.delete(`${BASE_URL}/questions/${questionId}/`);
    console.log("질문 삭제 성공:", response.data);
    return response.data;
  } catch (error) {
    console.error("질문 삭제 실패:", error.response?.data || error.message);
    throw new Error(
      `질문 삭제 실패: ${error.response?.data?.message || error.message}`
    );
  }
};

export default {
  submitAnswer,
  updateAnswer,
  deleteAnswer,
  getAnswer,
  deleteQuestion,
};
