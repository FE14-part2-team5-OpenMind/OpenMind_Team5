import React, { useEffect, useState } from "react";
import { Card } from "../styles/feedCardStyle";
import Badge from "./Badge";
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import { postLikeDislike } from "../services/postLikeDislike";
import TextForm from "./TextForm";
import { FiMoreHorizontal } from "react-icons/fi";
import { patchAnswer } from "../services/patchAnswer";
import { postAnswer } from "../services/postAnswer";

const Answer = ({ question, userName, profileImage }) => {
  const [done, setDone] = useState(false);
  const [isLikeClicked, setIsLikeClicked] = useState(false);
  const [isDislikeClicked, setIsDislikeClicked] = useState(false);
  const [like, setLike] = useState(question.like);
  const [dislike, setDislike] = useState(question.dislike);
  const [localAnswer, setLocalAnswer] = useState(() => {
    return question.answer ? question.answer.content : "";
  });
  const [isRejected, setIsRejected] = useState(false);
  const [dropdown, setDropDown] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [editHistory, setEditHistory] = useState("");

  const handleClick = async ({ type }) => {
    if (type === "like" && isLikeClicked === false) {
      setIsLikeClicked(!isLikeClicked);
      const response = await postLikeDislike({ type, id: question.id });
      setLike(response.like);
    } else if (type === "dislike" && isDislikeClicked === false) {
      setIsDislikeClicked(!isDislikeClicked);
      const response = await postLikeDislike({
        type,
        id: question.id,
      });
      setDislike(response.dislike);
    } else if (type === "like" && isLikeClicked === true) {
      setIsLikeClicked(!isLikeClicked);
    } else if (type === "dislike" && isDislikeClicked === true) {
      setIsDislikeClicked(!isDislikeClicked);
    }
  };

  const handleEdit = () => {
    setDone(false);
    setIsEdit(true);
  };

  const handleReject = async () => {
    // 곧 수정
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
      {question.answer ? (
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
        ) : editHistory === "수정됨" ? ( // !!!!!!!
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
                  question.answer?.isRejected
                    ? "answer-rejected"
                    : "content-answer"
                }
              >
                {question.answer?.isRejected
                  ? "답변 거절"
                  : question.answer?.content}
              </p>
            </div>
          </div>
        )
      ) : // 이곳에 경훈님이 텍스트 폼을 작성
      done ? ( // 답변 입력시
        isRejected ? ( // 답변 입력했는데 그게 거절한거였을 때
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
          // 답변 입력했는데 거절이 아닌 답변일 때
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
        // 답변입력이 안된 경우에 텍스트 상자 띄우기
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
      )}

      <div className="divider"></div>

      {/* 좋아요 싫어요 */}
      <div className="like-dislike">
        <div className={isLikeClicked ? "like-clicked" : "like"}>
          <BiLike
            onClick={() => handleClick({ type: "like" })}
            className="like-icon"
          />
          <span>{like}</span>
        </div>
        <div className={isDislikeClicked ? "dislike-clicked" : "dislike"}>
          <BiDislike
            onClick={() => handleClick({ type: "dislike" })}
            className="dislike-icon"
          />
          <span>{dislike}</span>
        </div>
      </div>
    </Card>
  );
};

export default Answer;
