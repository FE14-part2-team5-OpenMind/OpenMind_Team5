import { useState } from "react";
import { postQuestion } from "../services/postQuestion";

const useTextForm = ({
  mode,
  id,
  onClose,
  setSend,
  setOffset,
  setLocalAnswer,
  setDone,
}) => {
  const [textValue, setTextValue] = useState("");
  const [isValid, setIsValid] = useState(false);

  const handleTextChange = (e) => {
    const nextValue = e.target.value;
    setTextValue(nextValue);
    setIsValid(nextValue.trim() !== "");
  };

  const handleSubmit = async () => {
    if (!isValid) return;
    try {
      if (mode === "question") {
        await postQuestion({ subject_id: id, content: textValue });
        console.log("질문 등록 완료!");
        onClose();
        setSend(true);
        setOffset(0);
      }
      // 답변 부분 (mode === "answer")은 추후 구현
      else if (mode === "answer") {
        setLocalAnswer(textValue);
        setDone(true);
        // 답변 넣는 api 구현
      }
    } catch (error) {
      console.log("질문 등록 실패");
      console.error(error);
    }
  };

  return {
    textValue,
    isValid,
    handleTextChange,
    handleSubmit,
  };
};

export default useTextForm;
