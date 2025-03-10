import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getIndividualQuestions from "../services/getIndividualQuestions";

export const useIndividualQuestions = ({ offset }) => {
  const { id } = useParams();
  const [questionInfo, setQuestionInfo] = useState([]);

  useEffect(() => {
    const fetchIndividualQuestions = async () => {
      const response = await getIndividualQuestions(id, (limit = 10), offset);
      setQuestionInfo(response.results);
    };

    fetchIndividualQuestions();
  }, []);

  return {
    questionInfo,
  };
};
