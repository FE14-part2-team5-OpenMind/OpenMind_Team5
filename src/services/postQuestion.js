import axios from "axios";
const BASE_URL = "https://openmind-api.vercel.app";

export async function postQuestion({ subject_id, content }) {
  try {
    const response = await axios.post(
      `${BASE_URL}/14-5/subjects/${subject_id}/questions/`,
      { content }, // content를 객체로 전달
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("오류:", error.message);
    throw error;
  }
}
