// AnswerPageStyle.js
import styled from "styled-components";

export const ProfileSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
  width: 100%;

  @media (max-width: 767px) {
    margin-bottom: 24px;
  }
`;

export const ProfileName = styled.span`
  font-size: 24px;
  font-weight: 600;
  margin-top: 16px;
  margin-bottom: 24px;
  color: var(--gray60);

  @media (max-width: 767px) {
    font-size: 20px;
    margin-top: 12px;
    margin-bottom: 20px;
  }
`;

export const IconBoxContainer = styled.div`
  margin-bottom: 16px;

  @media (max-width: 767px) {
    margin-bottom: 12px;
  }
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
