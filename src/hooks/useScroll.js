import { useCallback, useEffect, useState } from "react";

export const useScroll = ({ setOffset, questionInfo, LIMIT }) => {
  const [moreData, setMoreData] = useState(false);

  const handleScroll = useCallback(() => {
    if (
      window.innerHeight + window.scrollY >=
      document.body.offsetHeight - 50
    ) {
      if (moreData === false) {
        setMoreData(true);
        setOffset((prev) => prev + LIMIT);
      }
    }
  }, [moreData]);

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
