import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getSubjectInfo from "../services/getSubjectInfo";

export const useSubjectInfo = () => {
  const { id } = useParams();
  const [userInfo, setUserInfo] = useState([]);

  useEffect(() => {
    const fetchUserInfo = async () => {
      const response = await getSubjectInfo(id);
      setUserInfo(response);
    };

    fetchUserInfo();
  }, []);

  return {
    id,
    userInfo,
  };
};
