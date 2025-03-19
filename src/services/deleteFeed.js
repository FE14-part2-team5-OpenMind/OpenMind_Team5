const BASE_URL = "https://openmind-api.vercel.app";
import axios from "axios";

export async function deleteFeed(id) {
  try {
    console.log("delete");
    const response = await axios.delete(`${BASE_URL}/14-5/subjects/${id}/`);
    return true;
  } catch (error) {
    if (error.response) {
      console.log(error.response.data);
      console.log("데이터 삭제 도중에 에러 발생");
      throw new Error(error.response.data);
    }
  }
}
