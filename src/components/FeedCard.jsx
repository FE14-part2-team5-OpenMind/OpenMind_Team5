import React, { useEffect, useState } from "react";
import { Card } from "../styles/feedCardStyle";
import Badge from "./Badge";
import More from "../assets/icons/More.png";
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import { postLikeDislike } from "../services/postLikeDislike";

const FeedCard = ({ question, userName, profileImage }) => {
  const [done, setDone] = useState(false);
  const [isLikeClicked, setIsLikeClicked] = useState(false);
  const [isDislikeClicked, setIsDislikeClicked] = useState(false);
  const [like, setLike] = useState(question.like);
  const [dislike, setDislike] = useState(question.dislike);

  const handleClick = async ({ type }) => {
    if (type === "like" && isLikeClicked === false) {
      setIsLikeClicked(!isLikeClicked);
      const response = await postLikeDislike({ type, id: question.id });
      setLike(response.like);
    } else if(type === "dislike" && isDislikeClicked === false) {
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
        <img src={More} alt="more 아이콘" />
      </div>

      {/* 질문 */}
      <div className="question">
        <span className="tip">질문</span>
        <span className="content">{question.content}</span>
      </div>

      {/* 답변 */}
      {done ? (
        <div className="answer">
          <img src={profileImage} alt="프로필 사진" />
          <div className="content">
            <span className="userName">{userName}</span>
            <p className="content-answer">{question.answer?.content}</p>
          </div>
        </div>
      ) : (
        <></>
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

export default FeedCard;
