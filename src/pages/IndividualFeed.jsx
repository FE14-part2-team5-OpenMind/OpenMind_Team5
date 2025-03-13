import React, { useCallback, useEffect, useState } from "react";
import backgroundImage from "../assets/images/IndividualFeed-BackgroundImage.png";
import logo from "../assets/images/logo.png";
import message from "../assets/images/Messages.png";
import FeedCard from "../components/FeedCard";
import AddQuestion from "../components/AddQuestion";
import {
  Wrapper,
  Logo,
  Profile,
  BodyWrapper,
  ProfilePlaceholder,
} from "../styles/individualFeedStyle";
import { useSubjectInfo } from "../hooks/useSubjectInfo";
import { useIndividualQuestions } from "../hooks/useIndividualQuestions";
import FeedCardPlaceholder from "../components/FeedCardPlaceholder";
import { RotatingAnimation } from "../styles/rotatingAnimation";
import { useScroll } from "../hooks/useScroll";
import IconBox from "../components/IconBox";

const IndividualFeed = () => {
  const [offset, setOffset] = useState(0);
  const LIMIT = 10;
  const { userInfo } = useSubjectInfo();
  const { questionInfo, count } = useIndividualQuestions({
    offset,
    limit: LIMIT,
  });
  const { moreData } = useScroll({ setOffset, questionInfo, LIMIT, count });
  const [loading, setLoading] = useState(true);

  // 스켈리톤 ui를 위한 상태 변경
  useEffect(() => {
    if (userInfo) {
      setLoading(false);
    } else {
      setLoading(true);
    }
  }, [userInfo, questionInfo]);

  console.log(questionInfo);
  console.log(count);

  return (
    <Wrapper>
      {/* 배경사진, 사용자 이름은 userInfo에서 가져온다 */}
      <img src={backgroundImage} alt="배경사진" />
      <Logo src={logo} alt="로고" />
      {loading ? (
        <ProfilePlaceholder />
      ) : (
        <Profile src={userInfo.imageSource} />
      )}
      <span className="profileName">{userInfo?.name}</span>

      {/* 아이콘 컴포넌트 */}
      <IconBox />

      {/* 질문을 보여주는 부분 */}
      <BodyWrapper>
        <div className="questionNum">
          <img src={message} alt="질문 아이콘" />
          <span>{count}개의 질문이 있습니다</span>
        </div>

        {loading ? (
          <>
            {Array.from({ length: 5 }).map((_, index) => (
              <FeedCardPlaceholder key={index} />
            ))}
          </>
        ) : questionInfo?.length > 0 ? (
          questionInfo.map((question, index) => (
            <FeedCard
              question={question}
              key={index}
              userName={userInfo.name}
              profileImage={userInfo.imageSource}
            />
          ))
        ) : (
          <></>
        )}
      </BodyWrapper>

      {moreData && questionInfo.length < count && <RotatingAnimation />}

      {/* 질문 작성하기 버튼 */}
      <AddQuestion />
    </Wrapper>
  );
};

export default IndividualFeed;
