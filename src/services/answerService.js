const BASE_URL = "https://openmind-api.vercel.app";
import axios from "axios";

// 답변 제출
export async function submitAnswer({
  questionId,
  answerText,
  isRejected = false,
}) {
  try {
    const response = await axios.post(
      `${BASE_URL}/14-5/questions/${questionId}/answers/`,
      { content: answerText, isRejected },
      { headers: { "Content-Type": "application/json" } }
    );
    return response.data;
  } catch (error) {
    console.error("오류:", error.message);
    throw error;
  }
}

// 답변 수정
export async function updateAnswer({ answerId, answerText, isRejected }) {
  try {
    const response = await axios.put(
      `${BASE_URL}/14-5/answers/${answerId}/`,
      { content: answerText, isRejected },
      { headers: { "Content-Type": "application/json" } }
    );
    return response.data;
  } catch (error) {
    console.error("오류:", error.message);
    throw error;
  }
}

// 답변 삭제
export async function deleteAnswer({ answerId }) {
  try {
    const response = await axios.delete(
      `${BASE_URL}/14-5/answers/${answerId}/`
    );
    return response.data;
  } catch (error) {
    console.error("오류:", error.message);
    throw error;
  }
}

// 답변 조회
export async function getAnswer({ answerId }) {
  try {
    const response = await axios.get(`${BASE_URL}/14-5/answers/${answerId}/`);
    return response.data;
  } catch (error) {
    console.error("오류:", error.message);
    throw error;
  }
}

// 질문 삭제
export async function deleteQuestion({ questionId }) {
  try {
    const response = await axios.delete(
      `${BASE_URL}/14-5/questions/${questionId}/`
    );
    return response.data;
  } catch (error) {
    console.error("오류:", error.message);
    throw error;
  }
}

// 질문 등록
export async function postQuestion({ subject_id, content }) {
  try {
    const response = await axios.post(
      `${BASE_URL}/14-5/subjects/${subject_id}/questions/`,
      { content },
      { headers: { "Content-Type": "application/json" } }
    );
    return response.data;
  } catch (error) {
    console.error("오류:", error.message);
    throw error;
  }
}

// 질문 조회 (단일 인자 스타일로 유지)
export async function getIndividualQuestions(subject_id, limit = 10, offset) {
  const query = `limit=${limit}&offset=${offset}`;
  try {
    const response = await axios.get(
      `${BASE_URL}/14-5/subjects/${subject_id}/questions/?${query}`
    );
    return response.data;
  } catch (error) {
    console.error("오류:", error.message);
    throw error;
  }
}
