import styled from "styled-components";

export const ProfileSection = styled.div`
  /* 수정: absolute positioning으로 변경하여 individualFeedStyle.js와 동일한 위치 제어 */
  position: absolute;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const ProfileName = styled.span`
  /* 수정: individualFeedStyle.js의 profileName과 동일한 위치 및 스타일 적용 */
  position: absolute;
  top: 277px;
  font: var(--body1-regular);
  font-size: 3.2rem;
  color: var(--gray60);

  @media (max-width: 767px) {
    font-size: 2.4rem;
  }
`;

export const IconBoxContainer = styled.div`
  /* 수정: individualFeedStyle.js의 Icons와 동일한 위치 적용 */
  position: absolute;
  top: 329px;
  display: flex;
  flex-direction: row;
  gap: 12px;

  /* 기존 반응형 스타일 제거, individualFeedStyle.js와 통일 */
`;

export const QuestionsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const QuestionsWrapper = styled.div`
  width: 100%;
  background-color: rgba(199, 187, 181, 0.3);
  border-radius: 16px;
  padding: 24px;
  margin-bottom: 24px;
  position: relative;

  @media (max-width: 767px) {
    padding: 16px;
    margin-bottom: 16px;
  }
`;

export const QuestionCount = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  width: 100%;
  text-align: center;

  img {
    width: 24px;
    height: 24px;
    margin-right: 8px;
  }

  span {
    font-size: 16px;
    font-weight: 500;
    color: var(--gray60);
  }

  @media (max-width: 767px) {
    margin-bottom: 16px;

    img {
      width: 20px;
      height: 20px;
      margin-right: 6px;
    }

    span {
      font-size: 14px;
    }
  }
`;
