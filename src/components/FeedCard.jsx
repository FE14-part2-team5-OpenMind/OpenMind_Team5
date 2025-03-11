import React from "react";
import { Card } from "../styles/feedCardStyle";
import Badge from "./Badge";
import More from "../assets/icons/More.png";
import thumbsUp from "../assets/icons/thumbs-up.png";
import thumbsDown from "../assets/icons/thumbs-down.png";

const FeedCard = ({ question, userName, profileImage }) => {
  return (
    <Card>
      <div className="head">
        <Badge finished={true} />
        <img src={More} alt="more 아이콘" />
      </div>

      {/* 질문 */}
      <div className="question">
        <span className="tip">질문</span>
        <span className="content">{question.content}</span>
      </div>

      {/* 답변 */}
      <div className="answer">
        <img src={profileImage} alt="프로필 사진" />
        <div className="content">
          <span className="userName">{userName}</span>
          <p className="content-answer">{question.answer.content}</p>
        </div>
      </div>

      <div className="divider"></div>

      {/* 좋아요 싫어요 */}
      <div className="like-dislike">
        <div className="like">
          <img src={thumbsUp} alt="좋아요" />
          <span>{question.like}</span>
        </div>
        <div className="dislike">
          <img src={thumbsDown} alt="싫어요" />
          <span>{question.dislike}</span>
        </div>
      </div>
    </Card>
  );
};

export default FeedCard;
