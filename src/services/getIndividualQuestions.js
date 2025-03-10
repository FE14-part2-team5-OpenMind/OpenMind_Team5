const BASE_URL = "https://openmind-api.vercel.app";
import axios from "axios";

export default async function getIndividualQuestions(subject_id, limit = 10, offset) {
    const query = `limit=${limit}&offset=${offset}`;
  try {
    const response = await axios.get(`${BASE_URL}/14-5/subjects/${subject_id}/questions/?${query}`);
    return response.data;
  } catch (error) {
    if (error.response) {
      console.log(error.response.data);
      throw new Error(error.response.data);
    }
  }
}
