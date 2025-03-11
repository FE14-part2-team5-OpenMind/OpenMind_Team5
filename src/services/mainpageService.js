import axios from 'axios';
import { ENDPOINTS } from '../api/api';

export const sendUserName = async (name) => {
  //메인페이지에서 이름 입력받고 피드 생성하는 api
  try {
    const response = await axios.post(
      ENDPOINTS.mypage,
      { name },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
