import React, { useEffect, useState } from "react";
import { Wrapper, Toast } from "../styles/individualFeedStyle"; // Toast 추가
import { useSubjectInfo } from "../hooks/useSubjectInfo";
import { useIndividualQuestions } from "../hooks/useIndividualQuestions";
import { RotatingAnimation } from "../styles/rotatingAnimation";
import { useScroll } from "../hooks/useScroll";
import FeedHeader from "../components/FeedHeader";
import AnswerBody from "../components/AnswerBody";

const AnswerPage = () => {
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
  const [toast, setToast] = useState(false);

  useEffect(() => {
    // 5초 동안 보이다가 사라지는 토스트 팝업
    if (toast) {
      const timer = setTimeout(() => setToast(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  return (
    <Wrapper>
      <FeedHeader userInfo={userInfo} setToast={setToast} />

      <AnswerBody
        count={count}
        questionInfo={questionInfo}
        userInfo={userInfo}
      />

      {toast && <Toast>URL이 복사되었습니다</Toast>}

      {moreData && questionInfo.length < count && <RotatingAnimation />}
    </Wrapper>
  );
};

export default AnswerPage;
