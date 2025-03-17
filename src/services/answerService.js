const BASE_URL = "https://openmind-api.vercel.app";
// 기수와 팀 번호는 환경 변수로 대체 가능: 예: `${BASE_URL}/${process.env.REACT_APP_COURSE}-${process.env.REACT_APP_TEAM}`
import axios from "axios";

// 질문 대상 생성 (sendUserName 기능 통합)
export async function createSubject({ name }) {
  try {
    const response = await axios.post(
      `${BASE_URL}/14-5/subjects/`, // 명세: POST /subjects/
      { name },
      { headers: { "Content-Type": "application/json" } }
    );
    return response.data;
  } catch (error) {
    if (error.response) {
      console.log(error.response.data);
      console.log("질문 대상 생성 중 에러 발생");
      throw new Error(error.response.data);
    }
    console.error("오류:", error.message);
    throw error;
  }
}

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
    if (error.response) {
      console.log(error.response.data);
      console.log("답변 제출 중 에러 발생");
      throw new Error(error.response.data);
    }
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
    if (error.response) {
      console.log(error.response.data);
      console.log("답변 수정 중 에러 발생");
      throw new Error(error.response.data);
    }
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
    if (error.response) {
      console.log(error.response.data);
      console.log("답변 삭제 중 에러 발생");
      throw new Error(error.response.data);
    }
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
    if (error.response) {
      console.log(error.response.data);
      console.log("답변 조회 중 에러 발생");
      throw new Error(error.response.data);
    }
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
    if (error.response) {
      console.log(error.response.data);
      console.log("질문 삭제 중 에러 발생");
      throw new Error(error.response.data);
    }
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
    if (error.response) {
      console.log(error.response.data);
      console.log("질문 등록 중 에러 발생");
      throw new Error(error.response.data);
    }
    console.error("오류:", error.message);
    throw error;
  }
}

// 질문 리액션 달기
export async function postLikeDislike({ id, type }) {
  try {
    const response = await axios.post(
      `${BASE_URL}/14-5/questions/${id}/reaction/`,
      { type },
      { headers: { "Content-Type": "application/json" } }
    );
    return response.data;
  } catch (error) {
    if (error.response) {
      console.log(error.response.data);
      console.log("리액션 추가 중 에러 발생");
      throw new Error(error.response.data);
    }
    console.error("오류:", error.message);
    throw error;
  }
}
