import axios from "axios";

const BASE_URL = "https://openmind-api.vercel.app/14-5";
const headers = { "Content-Type": "application/json; charset=utf-8" };

// 1. GET 요청

// 전체 유저 조회
export async function getAllSubjects() {
  try {
    const res = await axios.get(`${BASE_URL}/subjects/`, { headers });
    return res.data;
  } catch {
    throw new Error("에러가 발생했습니다.");
  }
}

// 전체 유저 조회(모든 데이터 정렬 때문에 사용함)
export async function getAllDataSubjects() {
  try {
    const res = await axios.get(`${BASE_URL}/subjects/?limit=9999`, {
      headers,
    });
    return res.data;
  } catch {
    throw new Error("에러가 발생했습니다.");
  }
}

// 특정 유저 조회 => user를 생성해서 얻은 id
export async function getSubject(userId) {
  try {
    const res = await axios.get(`${BASE_URL}/subjects/${userId}/`, { headers });
    return res.data;
  } catch {
    throw new Error("이미지를 불러올 수 없습니다.");
  }
}

// 특정 유저의 질문 목록
export async function getSubjectsOnQuestions(userId, pageLimit, pageOffset) {
  const QUERY_STRING = `?limit=${pageLimit}&offset=${pageOffset}`;
  try {
    const res = await axios.get(
      `${BASE_URL}/subjects/${userId}/questions/${QUERY_STRING}`,
      { headers }
    );
    return res.data;
  } catch {
    throw new Error("에러가 발생했습니다.");
  }
}

// 2. POST 요청

// 유저 생성
// 참고 - body에 프로퍼티 중 team을 넣지 않아도 정상 등록
export async function createSubject(userData) {
  try {
    const res = await axios.post(`${BASE_URL}/subjects/`, userData, {
      headers,
    });
    return res.data;
  } catch {
    throw new Error("에러가 발생했습니다.");
  }
}

// 질문 생성 => 이후, 특정 유저의 질문 목록에 보여짐
export async function createQuestions(userId, questionsData) {
  try {
    const res = await axios.post(
      `${BASE_URL}/subjects/${userId}/questions/`,
      questionsData,
      { headers }
    );
    return res.data;
  } catch {
    throw new Error("에러가 발생했습니다.");
  }
}

// 3. DELETE 요청

// 특정 유저 삭제
export async function deleteSubject(userId) {
  try {
    await axios.delete(`${BASE_URL}/subjects/${userId}/`, { headers });
  } catch {
    throw new Error("에러가 발생했습니다.");
  }
}
