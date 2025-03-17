import styled from "styled-components";
import { StyledButton } from "./buttonStyle";

const filterProps = (prop) => prop !== "variant";

export const Container = styled.div`
  width: 100%;
  background-color: var(--gray10);
  border-radius: 16px;
  padding: 24px;
  margin-bottom: 24px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  position: relative;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
`;

export const BadgeContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Badge = styled.div`
  display: inline-block;
  padding: 4px 12px;
  background-color: transparent;
  color: ${(props) => (props.isAnswered ? "var(--brown40)" : "var(--gray60)")};
  border-radius: 7px;
  font-size: 14px;
  font-weight: 500;
  border: 1px solid
    ${(props) => (props.isAnswered ? "var(--brown40)" : "var(--gray30)")};
`;

export const TimeInfo = styled.div`
  font-size: 14px;
  color: var(--gray40);
  margin-left: 8px;

  &::before {
    content: "·";
    margin-right: 8px;
  }
`;

export const QuestionContent = styled.div`
  margin-bottom: 24px;

  .question-label {
    font-size: 14px;
    color: var(--gray40);
    margin-bottom: 8px;
  }

  .content {
    font-size: 18px;
    font-weight: 500;
    color: var(--gray60);
  }
`;

export const UsernameHeader = styled.div`
  margin-bottom: 16px;
  font-size: 16px;
  font-weight: 500;
  color: var(--gray60);
`;

export const AnswerContent = styled.div`
  margin-bottom: 24px;

  .profile-section {
    display: flex;
    align-items: center;
    margin-bottom: 12px;

    img {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      margin-right: 12px;
    }

    .username {
      font-size: 16px;
      font-weight: 500;
      color: var(--gray60);
    }
  }

  .answer-text {
    font-size: 16px;
    color: ${(props) => (props.isRejected ? "var(--red50)" : "var(--gray60)")};
    line-height: 1.6;
  }
`;

export const AnswerForm = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;

  textarea {
    width: 100%;
    height: 150px;
    padding: 16px;
    border-radius: 8px;
    border: 1px solid var(--gray30);
    resize: none;
    font-family: "Pretendard", sans-serif;
    font-size: 16px;

    &:focus {
      outline: none;
      border-color: var(--brown40);
    }
  }

  .button-container {
    display: flex;
    justify-content: center;
    margin-top: 16px;
  }
`;

export const SubmitButton = styled(StyledButton).withConfig({
  shouldForwardProp: filterProps,
})`
  width: 100%;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};

  &:hover {
    background: var(--brown50);
  }
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  padding-top: 16px;
  border-top: 1px solid var(--gray20);
  gap: 16px;
`;

export const ReactionButton = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${(props) => (props.active ? "var(--brown40)" : "var(--gray40)")};
  font-size: 14px;
  cursor: pointer;

  &:hover {
    color: var(--brown40);
  }
`;

// 수정: KebabMenu 스타일 추가
export const KebabContainer = styled.div`
  position: relative;
`;

export const KebabMenuWrapper = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

export const KebabButton = styled.button`
  padding: 8px 16px;
  min-width: 80px;
  text-align: left;
  border: none;
  background: none;
  cursor: pointer;
  font-size: 14px;
  white-space: nowrap;
  &:hover {
    background: #f5f5f5;
  }
`;
