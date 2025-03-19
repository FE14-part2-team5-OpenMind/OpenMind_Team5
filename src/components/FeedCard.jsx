import React, { useEffect, useState } from "react";
import { Card } from "../styles/feedCardStyle";
import Badge from "./Badge";
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import { postLikeDislike } from "../services/postLikeDislike";
import LikeDislike from "./LikeDislike";

const FeedCard = ({ question, userName, profileImage }) => {
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (question.answer?.id) {
      setDone(true);
    } else {
      setDone(false);
    }
  }, [question]);

  return (
    <Card>
      <div className="head">
        <Badge finished={done} />
      </div>

      {/* 질문 */}
      <div className="question">
        <span className="tip">질문</span>
        <span className="content">{question.content}</span>
      </div>

      {/* 답변 */}
      {done && question.answer ? (
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
      ) : (
        <></>
      )}

      <div className="divider"></div>

      {/* 좋아요 싫어요 */}
      <LikeDislike question={question}/>
    </Card>
  );
};

export default FeedCard;
