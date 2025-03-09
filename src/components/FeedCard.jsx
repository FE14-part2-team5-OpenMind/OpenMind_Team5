import React from "react";
import { Card } from "../styles/feedCardStyle";
import Badge from "./Badge";
import More from "../assets/icons/More.png";
import thumbsUp from "../assets/icons/thumbs-up.png";
import thumbsDown from "../assets/icons/thumbs-down.png";
import profileImage from "../assets/images/profile-image.png";

const FeedCard = () => {
  return (
    <Card>
      <div className="head">
        <Badge finished={true} />
        <img src={More} alt="more 아이콘" />
      </div>

      {/* 질문 */}
      <div className="question">
        <span className="tip">질문</span>
        <span className="content">좋아하는 동물은?</span>
      </div>

      {/* 답변 */}
      <div className="answer">
        <img src={profileImage} alt="프로필 사진" />
        <div className="content">
          <span className="userName">아초는 고양이</span>
          <p className="content-answer">
            그들을 불러 귀는 이상의 오직 피고, 가슴이 이상, 못할 봄바람이다.
            찾아다녀도, 전인 방황하였으며, 대한 바이며, 이것이야말로 가치를
            청춘의 따뜻한 그리하였는가? 몸이 열락의 청춘의 때문이다. 천고에
            피어나는 간에 밝은 이상, 인생의 만물은 피다. 대중을 이성은
            방황하여도, 그리하였는가? 크고 평화스러운 품에 방황하였으며, 말이다.
            이상은 들어 예수는 크고 긴지라 역사를 피다. 얼음에 있음으로써 꽃
            보배를 곧 가는 교향악이다. 우는 새 예가 우리의 것은 피다. 피가
            그것을 어디 앞이 기쁘며, 이상의 열락의 위하여서 끝까지 것이다. 있는
            봄바람을 방황하여도, 우리의 것은 작고 아니한 영원히 듣기만 운다.
          </p>
        </div>
      </div>

      <div className="divider"></div>

      {/* 좋아요 싫어요 */}
      <div className="like-dislike">
        <div className="like">
          <img src={thumbsUp} alt="좋아요" />
          <span>12</span>
        </div>
        <div className="dislike">
          <img src={thumbsDown} alt="싫어요" />
          <span>2</span>
        </div>
      </div>
    </Card>
  );
};

export default FeedCard;
