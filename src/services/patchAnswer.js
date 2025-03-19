const BASE_URL = "https://openmind-api.vercel.app";
import axios from "axios";

export async function patchAnswer(id, textValue, isRejected = false) {
  try {
    console.log("patch");
    console.log(id);
    const response = await axios.patch(`${BASE_URL}/14-5/answers/${id}/`, {
      content: textValue,
      isRejected: isRejected,
    });
    return response.data;
  } catch (error) {
    if (error.response) {
      console.log(error.response.data);
      console.log("데이터 넣는 도중에 에러 발생");
      throw new Error(error.response.data);
    }
  }
}
