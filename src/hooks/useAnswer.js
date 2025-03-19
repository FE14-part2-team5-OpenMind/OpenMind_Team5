import { useEffect, useState } from "react";
import { postAnswer } from "../services/postAnswer";

const useAnswer = ({ question, setLocalAnswer, setIsEdit }) => {
  const [done, setDone] = useState(false);
  const [dropdown, setDropDown] = useState(false);
  const [isRejected, setIsRejected] = useState(false);

  const handleEdit = () => {
    setDone(false);
    setIsEdit(true);
  };

  const handleReject = async () => {
    await postAnswer(question.id, "답변 거절", true);
    setIsRejected(true);
    setDone(true);
    setLocalAnswer("답변 거절");
  };

  const handleDropDown = () => {
    setDropDown(!dropdown);
  };

  useEffect(() => {
    if (question.answer) {
      setDone(true);
    } else {
      setDone(false);
    }
  }, []);

  return {
    done,
    dropdown,
    isRejected,
    setDone,
    handleEdit,
    handleReject,
    handleDropDown,
  };
};

export default useAnswer;
