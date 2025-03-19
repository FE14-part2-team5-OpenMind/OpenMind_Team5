import { useState } from "react";
import { postQuestion } from "../services/postQuestion";
import { postAnswer } from "../services/postAnswer";
import { patchAnswer } from "../services/patchAnswer";

const useTextForm = ({
  mode,
  id,
  onClose,
  setSend,
  setOffset,
  setLocalAnswer,
  setDone,
  isEdit,
  setIsEdit,
  setEditHistory,
  localAnswer,
}) => {
  const [textValue, setTextValue] = useState(() => {
    return localAnswer?.length > 0 ? localAnswer : "";
  });
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
      else if (mode === "answer" && isEdit === false) {
        await postAnswer(id, textValue);
        setLocalAnswer(textValue);
        setDone(true);
      } else if (mode === "answer" && isEdit === true) {
        // 수정 구현 patch
        console.log("patch");
        await patchAnswer(id, textValue);
        setLocalAnswer(textValue);
        setEditHistory("수정됨");
        setIsEdit(false);
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
