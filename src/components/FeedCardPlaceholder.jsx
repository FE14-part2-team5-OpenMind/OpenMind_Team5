import React from "react";
import { Card } from "../styles/feedCardPlaceholderStyle";
import Badge from "./Badge";

const FeedCardPlaceholder = () => {
  return (
    <Card>
      <div className="head">
       <div className="badge"></div>
      </div>

      {/* 질문 */}
      <div className="question"></div>

      {/* 답변 */}
      <div className="answer">
        <img alt="프로필 사진" />
        <div className="content">
          <div className="userName"></div>
          <div className="content-answer"></div>
          <div className="content-answer"></div>
          <div className="content-answer"></div>
          <div className="content-answer"></div>
        </div>
      </div>
    </Card>
  );
};

export default FeedCardPlaceholder;
