const BASE_URL = "https://openmind-api.vercel.app";
import axios from "axios";

export default async function getSubjectInfo(id) {
  try {
    const response = await axios.get(`${BASE_URL}/14-5/subjects/${id}/`);
    return response.data;
  } catch (error) {
    if (error.response) {
        console.log(error.response.data);
        console.log("데이터 가져오는 도중에 에러 발생");
      throw new Error(error.response.data);
    }
  }
}
