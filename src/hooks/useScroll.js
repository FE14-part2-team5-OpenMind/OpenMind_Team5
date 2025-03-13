import { useCallback, useEffect, useState } from "react";

export const useScroll = ({ setOffset, questionInfo, LIMIT, count }) => {
  const [moreData, setMoreData] = useState(false);
  console.log(`count: ${count}`);
  console.log(`questionInfo 길이: ${questionInfo.length}`);
  console.log(moreData);

  const handleScroll = useCallback(() => {
    if (
      document.documentElement.scrollHeight -
        document.documentElement.clientHeight <=
      window.scrollY
    ) {
      if (moreData === false && questionInfo.length < count) {
        console.log("데이터 추가로 호출");
        setMoreData(true);
        setOffset((prev) => prev + LIMIT);
      }
    }
  }, [moreData, questionInfo, count, setOffset]);

  // 무한 스크롤 이벤트 등록, 삭제
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // 추가로 정보를 더 받아와서 배열이 변경되면 moreData를 false로 변경
  useEffect(() => {
    if (questionInfo?.length > 0) {
      setMoreData(false);
    }
  }, [questionInfo]);

  return {
    moreData,
  };
};
