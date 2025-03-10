import React, { useState } from "react";
import backgroundImage from "../assets/images/IndividualFeed-BackgroundImage.png";
import logo from "../assets/images/logo.png";
import profileImage from "../assets/images/profile-image.png";
import facebook from "../assets/images/Facebook.png";
import kakao from "../assets/images/Kakaotalk.png";
import message from "../assets/images/Messages.png";
import link from "../assets/images/Link.png";
import FeedCard from "../components/FeedCard";
import AddQuestion from "../components/AddQuestion";
import {
  Wrapper,
  Logo,
  Profile,
  Icons,
  Icon,
  BodyWrapper,
} from "../styles/individualFeedStyle";
import { useSubjectInfo } from "../hooks/useSubjectInfo";

const IndividualFeed = () => {
  const [offset, setOffset] = useState(0);
  const { userInfo } = useSubjectInfo();

  return (
    <Wrapper>
      <img src={backgroundImage} alt="배경사진" />
      <Logo src={logo} alt="로고" />
      <Profile src={profileImage} alt="프로필 이미지" />
      <span className="profileName">아초는 고양이</span>

      <Icons>
        <Icon colorType="link">
          <img src={link} alt="링크" />
        </Icon>
        <Icon
          href="https://www.kakaocorp.com/page/service/service/KakaoTalk"
          colorType="kakao"
        >
          <img src={kakao} alt="카카오" />
        </Icon>
        <Icon href="https://facebook.com" colorType="facebook">
          <img src={facebook} alt="페이스북" />
        </Icon>
      </Icons>

      {/* 질문을 보여주는 부분 */}
      <BodyWrapper>
        <div className="questionNum">
          <img src={message} alt="질문 아이콘" />
          <span>N개의 질문이 있습니다</span>
        </div>

        {/* 카드 예시 */}
        {/* userInfo를 .map해서 만들어야 함 */}
        <FeedCard offset={offset} />
      </BodyWrapper>

      {/* 질문 작성하기 버튼 */}
      <AddQuestion />
    </Wrapper>
  );
};

export default IndividualFeed;
