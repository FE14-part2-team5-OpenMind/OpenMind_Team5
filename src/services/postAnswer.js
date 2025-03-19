const BASE_URL = "https://openmind-api.vercel.app";
import axios from "axios";

export async function postAnswer(id, textValue, isRejected = false) {
  try {
    console.log(id);
    const response = await axios.post(
      `${BASE_URL}/14-5/questions/${id}/answers/`,
      {
        questionId: id,
        content: textValue,
        isRejected: isRejected,
        team: "14-5",
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
