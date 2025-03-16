import React, { useEffect, useState } from "react";
import AddQuestion from "../components/AddQuestion";
import { Wrapper } from "../styles/individualFeedStyle";
import { useSubjectInfo } from "../hooks/useSubjectInfo";
import { useIndividualQuestions } from "../hooks/useIndividualQuestions";
import { RotatingAnimation } from "../styles/rotatingAnimation";
import { useScroll } from "../hooks/useScroll";
import Modal from "../components/Modal/Modal";
import FeedHeader from "../components/FeedHeader";
import FeedBody from "../components/FeedBody";

const IndividualFeed = () => {
  const [offset, setOffset] = useState(0);
  const LIMIT = 10;
  const { userInfo } = useSubjectInfo();
  const { questionInfo, count, setSend } = useIndividualQuestions({
    offset,
    limit: LIMIT,
  });
  const { moreData } = useScroll({
    setOffset,
    questionInfo,
    LIMIT,
    count,
    setSend,
  });
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen((prev) => !prev);
    setSend(false);
  };

  // 스켈리톤 ui를 위한 상태 변경
  useEffect(() => {
    if (userInfo) {
      setLoading(false);
    } else {
      setLoading(true);
    }
  }, [userInfo, questionInfo]);

  return (
    <Wrapper>
      <FeedHeader loading={loading} userInfo={userInfo} />

      <FeedBody
        count={count}
        loading={loading}
        questionInfo={questionInfo}
        userInfo={userInfo}
      />

      {moreData && questionInfo.length < count && <RotatingAnimation />}

      {/* 질문 작성하기 버튼 */}
      <AddQuestion onClick={handleModalOpen} />
      {isModalOpen && (
        <Modal
          onClose={handleModalOpen}
          userInfo={userInfo}
          setSend={setSend}
        />
      )}
    </Wrapper>
  );
};

export default IndividualFeed;
