import React, { useEffect, useState } from "react";
import AddQuestion from "../components/AddQuestion";
import { Wrapper, Toast } from "../styles/individualFeedStyle"; // Toast 추가
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [toast, setToast] = useState(false);

  useEffect(() => {
    // 5초 동안 보이다가 사라지는 토스트 팝업
    if (toast) {
      const timer = setTimeout(() => setToast(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  const handleModalOpen = () => {
    setIsModalOpen((prev) => !prev);
    setSend(false);
  };

  return (
    <Wrapper>
      <FeedHeader userInfo={userInfo} setToast={setToast} />

      <FeedBody count={count} questionInfo={questionInfo} userInfo={userInfo} />

      {toast && <Toast>URL이 복사되었습니다</Toast>}

      {moreData && questionInfo.length < count && <RotatingAnimation />}

      {/* 질문 작성하기 버튼 */}
      <AddQuestion onClick={handleModalOpen} />
      {isModalOpen && (
        <Modal
          onClose={handleModalOpen}
          userInfo={userInfo}
          setSend={setSend}
          setOffset={setOffset}
        />
      )}
    </Wrapper>
  );
};

export default IndividualFeed;
