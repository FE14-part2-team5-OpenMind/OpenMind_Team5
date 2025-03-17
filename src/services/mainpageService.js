import axios from "axios";

const BASE_URL = "https://openmind-api.vercel.app/14-5";

const ENDPOINTS = {
  mypage: `${BASE_URL}/subjects/`,
};

export const sendUserName = async (name) => {
  //메인페이지에서 이름 입력받고 피드 생성하는 api
  try {
    const response = await axios.post(
      ENDPOINTS.mypage,
      { name },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
