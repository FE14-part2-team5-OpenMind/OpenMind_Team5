import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getIndividualQuestions from "../services/getIndividualQuestions";

// 개별 피드의 카드 질문과 질문에 대한 답변 가져오기
export const useIndividualQuestions = ({ offset, limit = 10 }) => {
  const { id } = useParams();
  const [questionInfo, setQuestionInfo] = useState(null);
  const [count, setCount] = useState(0);
  const [send, setSend] = useState(false);

  useEffect(() => {
    const fetchIndividualQuestions = async () => {
      const response = await getIndividualQuestions(id, limit, offset);
      if (send || offset === 0) {
        setQuestionInfo(response.results);
        setCount(response.count);
      } else if (send === true && offset > 0) {
        setQuestionInfo(response.results);
        setCount(response.count);
      } else if (send === false && offset > 0) {
        setQuestionInfo((prev) =>
          prev ? [...prev, ...response.results] : response.results
        );
      }
      setCount(response.count);
      console.log(`offset : ${offset}`);
    };

    fetchIndividualQuestions();
  }, [offset, send, id, limit]);

  return {
    questionInfo,
    count,
    setSend,
  };
};
