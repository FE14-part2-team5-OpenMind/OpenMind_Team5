import React, {useState } from "react";
import { Card } from "../styles/feedCardStyle";
import Badge from "./Badge";
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import { postLikeDislike } from "../services/postLikeDislike";
import { FiMoreHorizontal } from "react-icons/fi";
import AnswerPageContent from "./AnswerPageContent";
import useAnswer from "../hooks/useAnswer";
import LikeDislike from "./LikeDislike";

const Answer = ({ question, userName, profileImage }) => {
  const [localAnswer, setLocalAnswer] = useState(() => {
    return question.answer ? question.answer.content : "";
  });
  const [isEdit, setIsEdit] = useState(false);
  const [editHistory, setEditHistory] = useState("");
  const {
    done,
    dropdown,
    isRejected,
    setDone,
    handleEdit,
    handleReject,
    handleDropDown,
  } = useAnswer({ question, setLocalAnswer, setIsEdit });

  return (
    <Card>
      <div className="head">
        <Badge finished={done} />
        <FiMoreHorizontal className="more-icon" onClick={handleDropDown} />
        {isRejected || question.answer?.isRejected
          ? dropdown && <div></div>
          : dropdown && (
              <div className="dropdown">
                {question.answer && <div onClick={handleEdit}>수정하기</div>}
                {!question.answer && <div onClick={handleReject}>거절하기</div>}
              </div>
            )}
      </div>

      {/* 질문 */}
      <div className="question">
        <span className="tip">질문</span>
        <span className="content">{question.content}</span>
      </div>

      {/* 답변 */}
      <AnswerPageContent
        question={question}
        userName={userName}
        profileImage={profileImage}
        isEdit={isEdit}
        editHistory={editHistory}
        localAnswer={localAnswer}
        isRejected={isRejected}
        done={done}
        setLocalAnswer={setLocalAnswer}
        setDone={setDone}
        setIsEdit={setIsEdit}
        setEditHistory={setEditHistory}
      />

      <div className="divider"></div>

      {/* 좋아요 싫어요 */}
      <LikeDislike question={question}/>
    </Card>
  );
};

export default Answer;
