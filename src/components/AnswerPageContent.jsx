import React from "react";
import TextForm from "./TextForm";

const AnswerPageContent = ({
  question,
  userName,
  profileImage,
  isEdit,
  editHistory,
  localAnswer,
  isRejected,
  done,
  setLocalAnswer,
  setDone,
  setIsEdit,
  setEditHistory,
}) => {
  return question.answer ? (
    isEdit ? (
      <div className="answer">
        <img src={profileImage} alt="프로필 사진" />
        <div className="content">
          <span className="userName">{userName}</span>
          <TextForm
            buttonText={"답변 완료"}
            mode={"answer"}
            setLocalAnswer={setLocalAnswer}
            setDone={setDone}
            id={question.answer?.id}
            isEdit={isEdit}
            setIsEdit={setIsEdit}
            setEditHistory={setEditHistory}
            localAnswer={localAnswer}
          />
        </div>
      </div>
    ) : editHistory === "수정됨" ? (
      <div className="answer">
        <img src={profileImage} alt="프로필 사진" />
        <div className="content">
          <span className="userName">{userName}</span>
          <p className="content-answer">{localAnswer}</p>
        </div>
      </div>
    ) : (
      <div className="answer">
        <img src={profileImage} alt="프로필 사진" />
        <div className="content">
          <span className="userName">{userName}</span>
          <p
            className={
              question.answer?.isRejected ? "answer-rejected" : "content-answer"
            }
          >
            {question.answer?.isRejected
              ? "답변 거절"
              : question.answer?.content}
          </p>
        </div>
      </div>
    )
  ) : done ? (
    isRejected ? (
      <>
        <div className="answer">
          <img src={profileImage} alt="프로필 사진" />
          <div className="content">
            <span className="userName">{userName}</span>
            <p className="answer-rejected">{localAnswer}</p>
          </div>
        </div>
      </>
    ) : (
      <>
        <div className="answer">
          <img src={profileImage} alt="프로필 사진" />
          <div className="content">
            <span className="userName">{userName}</span>
            <p className="content-answer">{localAnswer}</p>
          </div>
        </div>
      </>
    )
  ) : (
    <>
      <div className="answer">
        <img src={profileImage} alt="프로필 사진" />
        <div className="content">
          <span className="userName">{userName}</span>
          <TextForm
            buttonText={"답변 완료"}
            mode={"answer"}
            setLocalAnswer={setLocalAnswer}
            setDone={setDone}
            id={question?.id}
            isEdit={isEdit}
            setIsEdit={setIsEdit}
          />
        </div>
      </div>
    </>
  );
};

export default AnswerPageContent;
