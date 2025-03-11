import styled, { keyframes } from "styled-components";

const placeholderGlow = keyframes`
    50% {
    opacity: 0.2;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 684px;
  padding: 32px;
  background-color: var(--gray10);
  box-shadow: 0px 4px 4px rgba(140, 140, 140, 0.25);
  border-radius: 16px;

  @media (max-width: 767px) {
    width: 295px;
  }

  div.head {
    display: flex;
    flex-direction: row;

    div.badge {
      border-radius: 8px;
      width: 76px;
      height: 26px;
      background: var(--gray30);
      animation: ${placeholderGlow} 1.5s infinite ease-in-out;
    }
  }

  div.question {
    display: flex;
    flex-direction: row;
    margin-top: 36px;
    width: 620px;
    height: 24px;
    border-radius: 8px;
    background: var(--gray30);
    animation: ${placeholderGlow} 1.5s infinite ease-in-out;

    @media (max-width: 767px) {
      width: 247px;
      height: 22px;
    }
  }

  div.answer {
    display: flex;
    flex-direction: row;
    margin-top: 32px;

    img {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      background: var(--gray30);
      animation: ${placeholderGlow} 1.5s infinite ease-in-out;

      @media (max-width: 767px) {
        width: 32px;
        height: 32px;
      }
    }
    div.content {
      display: flex;
      flex-direction: column;
      margin-left: 12px;

      div.userName {
        width: 100px;
        height: 24px;
        border-radius: 8px;
        background: var(--gray30);
        animation: ${placeholderGlow} 1.5s infinite ease-in-out;

        @media (max-width: 767px) {
          width: 78px;
          height: 18px;
        }
      }
      div.content-answer {
        margin-top: 4px;
        border-radius: 8px;
        width: 560px;
        height: 22px;
        background: var(--gray30);
        animation: ${placeholderGlow} 1.5s infinite ease-in-out;

        @media (max-width: 767px) {
          width: 203px;
          height: 20px;
        }
      }
    }
  }
`;
