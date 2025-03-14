// 파일 위치: src/pages/AnswerForm.jsx

import React from "react";
import backgroundImage from "../assets/images/IndividualFeed-BackgroundImage.png";
import logo from "../assets/images/logo.png";

// IndividualFeed 스타일을 그대로 활용
import {
  Wrapper,
  Logo,
  Profile,
  BodyWrapper,
  ProfilePlaceholder,
} from "../styles/individualFeedStyle";
// 단독 테스트를 위해 AnswerForm 컴포넌트 import
import AnswerForm from "../components/AnswerForm";
// (필요 시) 테스트용 더미 이미지 import
import emptyIcon from "../assets/images/NoQuestion.svg";

const AnswerFormPage = () => {
  // 테스트용 더미 userInfo (실제 API 대신 임시 데이터 사용)
  const userInfo = {
    name: "Test User",
    imageSource: "https://via.placeholder.com/150",
  };

  // 답변 제출 후 결과를 콘솔에 출력하는 핸들러
  const handleAnswerSubmit = (data) => {
    console.log("답변 제출 결과:", data);
  };

  return (
    <Wrapper>
      {/* IndividualFeed의 배경, 로고, 프로필 등 디자인 요소 활용 */}
      <img src={backgroundImage} alt="배경사진" />
      <Logo src={logo} alt="로고" />
      {userInfo ? (
        <Profile src={userInfo.imageSource} alt="프로필" />
      ) : (
        <ProfilePlaceholder />
      )}
      <span className="profileName">{userInfo.name}</span>

      {/* 본문 영역: AnswerForm 테스트 */}
      <BodyWrapper>
        <h1>답변 입력 폼 테스트 페이지</h1>
        <AnswerForm
          questionId="dummy-question-id"
          onAnswerSubmit={handleAnswerSubmit}
        />
      </BodyWrapper>
    </Wrapper>
  );
};

export default AnswerFormPage;
