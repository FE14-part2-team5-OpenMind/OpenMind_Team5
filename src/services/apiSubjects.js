import axios from "axios";

const BASE_URL = "https://openmind-api.vercel.app/14-5";
const headers = { "Content-Type": "application/json; charset=utf-8" };

// 1. GET 요청

// 전체 유저 조회
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
