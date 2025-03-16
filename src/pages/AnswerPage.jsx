import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.png";
import backgroundImage from "../assets/images/IndividualFeed-BackgroundImage.png";
import message from "../assets/images/Messages.png";
import emptyIcon from "../assets/images/NoQuestion.svg";
import Answer from "../components/Answer";
import IconBox from "../components/IconBox";
import {
  Wrapper,
  Logo,
  Profile,
  BodyWrapper,
  ProfilePlaceholder,
  EmptyIcon,
} from "../styles/individualFeedStyle";
import {
  QuestionsContainer,
  QuestionsWrapper,
  QuestionCount,
} from "../styles/AnswerPageStyle"; // 수정: 필요한 스타일만 유지
import { useSubjectInfo } from "../hooks/useSubjectInfo";
import { useIndividualQuestions } from "../hooks/useIndividualQuestions";
import { useScroll } from "../hooks/useScroll";
import { RotatingAnimation } from "../styles/rotatingAnimation";

const AnswerPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [offset, setOffset] = useState(0);
  const LIMIT = 10;

  const { userInfo } = useSubjectInfo();
  const { questionInfo, count } = useIndividualQuestions({
    offset,
    limit: LIMIT,
  });
  const { moreData } = useScroll({ setOffset, questionInfo, LIMIT, count });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (userInfo && questionInfo !== null) {
      setLoading(false);
    } else {
      setLoading(true);
    }
  }, [userInfo, questionInfo, id]);

  useEffect(() => {
    setOffset(0);
  }, [id]);

  const handleLogoClick = () => {
    navigate("/");
  };

  const handleAnswerSubmit = (questionId, answerText) => {
    console.log("답변 제출:", { questionId, content: answerText });
  };

  const handleAnswerDelete = (questionId) => {
    console.log("질문 삭제:", { questionId });
  };

  const handleAnswerUpdate = (questionId, updatedText) => {
    console.log("답변 업데이트:", { questionId, content: updatedText });
  };

  if (loading) {
    return (
      <Wrapper>
        <img src={backgroundImage} alt="배경사진" />
        <Logo src={logo} alt="로고" onClick={handleLogoClick} />
        <ProfilePlaceholder />
        <span className="profileName">로딩 중...</span>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <img src={backgroundImage} alt="배경사진" />
      <Logo src={logo} alt="로고" onClick={handleLogoClick} />
      <Profile src={userInfo.imageSource} />
      <span className="profileName">{userInfo.name}</span>{" "}
      {/* 수정: ProfileName 대신 className 사용 */}
      <IconBox /> {/* 수정: IconBoxContainer 대신 직접 사용 */}
      <BodyWrapper count={count}>
        {questionInfo?.length > 0 ? (
          <QuestionsWrapper>
            <QuestionCount>
              <img src={message} alt="질문 아이콘" />
              <span>{count}개의 질문이 있습니다.</span>
            </QuestionCount>
            <QuestionsContainer>
              {questionInfo.map((q) => (
                <Answer
                  key={q.id}
                  questionId={q.id}
                  question={q.content}
                  answer={q.answer?.content || q.answer}
                  profileImage={userInfo.imageSource}
                  username={userInfo.name}
                  timestamp={q.createdAt}
                  likes={q.likes || 0}
                  dislikes={q.dislikes || 0}
                  isAnswered={q.isAnswered || false}
                  onAnswerSubmit={handleAnswerSubmit}
                  onAnswerDelete={handleAnswerDelete}
                  onAnswerUpdate={handleAnswerUpdate}
                />
              ))}
            </QuestionsContainer>
          </QuestionsWrapper>
        ) : (
          <>
            <div className="questionNum">
              <img src={message} alt="질문 아이콘" />
              <span>아직 질문이 없습니다.</span>
            </div>
            <EmptyIcon src={emptyIcon} alt="질문 없을 때 이미지" />
          </>
        )}
        {moreData && questionInfo.length < count && <RotatingAnimation />}
      </BodyWrapper>
    </Wrapper>
  );
};

export default AnswerPage;
