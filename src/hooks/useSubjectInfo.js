import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getSubjectInfo from "../services/getSubjectInfo";

export const useSubjectInfo = () => {
  const { id } = useParams();
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const fetchUserInfo = async () => {
      const response = await getSubjectInfo(id);
      console.log("API 응답:", response); 
      setUserInfo(response);
    };

    fetchUserInfo();
  }, []);

  return {
    id,
    userInfo,
  };
};
