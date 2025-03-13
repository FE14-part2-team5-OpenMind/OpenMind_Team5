import axios from "axios";
const BASE_URL = "https://openmind-api.vercel.app";

export async function postLikeDislike({ id, type }) {
  try {
    const response = await axios.post(
      `${BASE_URL}/14-5/questions/${id}/reaction/`,
      {
        type: `${type}`,
      }
    );
    return response.data;
  } catch (error) {
    if (error.response) {
      console.log(error.response.data);
      console.log("데이터 넣는 도중에 에러 발생");
      throw new Error(error.response.data);
    }
  }
}
