import { useEffect } from "react";

export const useKakaoShare = () => {
  useEffect(() => {
    console.log("🔍 Kakao API Key:", import.meta.env.VITE_KAKAO_API_KEY); // ✅ 추가 (디버깅용)
    // ✅ Kakao SDK가 존재하는지 확인 후 초기화
    if (window.Kakao && !window.Kakao.isInitialized()) {
      window.Kakao.init(import.meta.env.VITE_KAKAO_API_KEY);
      console.log("✅ Kakao SDK 초기화 완료");
    } else {
      console.error("❌ Kakao SDK가 로드되지 않았거나 이미 초기화됨");
    }
  }, []);

  // ✅ 공유 기능 실행 함수
  const shareKakao = (url) => {
    if (!window.Kakao) {
      console.error("❌ Kakao SDK가 로드되지 않았습니다.");
      return;
    }
    console.log("✅ 공유 기능 실행:", url);

    window.Kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title: "공유할 페이지",
        description: "이 페이지를 확인해보세요!",
        imageUrl: "https://your-image-url.com", // 🔹 대표 이미지 URL
        link: {
          mobileWebUrl: url,
          webUrl: url,
        },
      },
    });
  };

  return { shareKakao };
};
