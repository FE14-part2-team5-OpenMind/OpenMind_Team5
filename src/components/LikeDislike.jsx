import React, { useState } from "react";
import { LikeDislikeStyle } from "../styles/feedCardStyle";
import { postLikeDislike } from "../services/postLikeDislike";
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";

const LikeDislike = ({ question }) => {
  const [isLikeClicked, setIsLikeClicked] = useState(false);
  const [isDislikeClicked, setIsDislikeClicked] = useState(false);
  const [like, setLike] = useState(question.like);
  const [dislike, setDislike] = useState(question.dislike);

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
  return (
    <LikeDislikeStyle>
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
    </LikeDislikeStyle>
  );
};

export default LikeDislike;
