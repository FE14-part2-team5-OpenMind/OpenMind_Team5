import React from "react";
import { BodyWrapper, EmptyIcon, Wrapper } from "../styles/individualFeedStyle";
import message from "../assets/images/Messages.png";
import FeedCardPlaceholder from "../components/FeedCardPlaceholder";
import emptyIcon from "../assets/images/NoQuestion.svg";
import Answer from "../components/Answer";
import DeleteButton from "./DeleteButton";

const AnswerBody = ({ count, questionInfo, userInfo }) => {
  return (
    <Wrapper>
      <DeleteButton userInfo={userInfo} />

      {/* 질문을 보여주는 부분 */}
      <BodyWrapper count={count} button={true}>
        <div className="questionNum">
          <img src={message} alt="질문 아이콘" />
          <span>
            {count === 0
              ? "아직 질문이 없습니다."
              : `${count}개의 질문이 있습니다.`}
          </span>
        </div>

        {questionInfo === null ? (
          <>
            {Array.from({ length: 5 }).map((_, index) => (
              <FeedCardPlaceholder key={index} />
            ))}
          </>
        ) : questionInfo.length > 0 ? (
          questionInfo.map((question, index) => (
            <Answer
              question={question}
              key={index}
              userName={userInfo?.name}
              profileImage={userInfo?.imageSource}
            />
          ))
        ) : (
          <EmptyIcon src={emptyIcon} alt="질문 없을 때 이미지" />
        )}
      </BodyWrapper>
    </Wrapper>
  );
};

export default AnswerBody;
