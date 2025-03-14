import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import {
  BiLike,
  BiDislike,
  BiDotsHorizontalRounded,
  BiEdit,
  BiTrash,
} from "react-icons/bi";
import { StyledButton } from "../styles/buttonStyle";

const Container = styled.div`
  width: 100%;
  background-color: var(--gray10);
  border-radius: 16px;
  padding: 24px;
  margin-bottom: 24px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  position: relative;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
`;

const BadgeContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Badge = styled.div`
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

const TimeInfo = styled.div`
  font-size: 14px;
  color: var(--gray40);
  margin-left: 8px;

  &::before {
    content: "·";
    margin-right: 8px;
  }
`;

const OptionsButton = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: var(--gray40);

  &:hover {
    color: var(--gray60);
  }
`;

const OptionsMenu = styled.div`
  position: absolute;
  top: 60px;
  right: 24px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.15);
  z-index: 10;
  overflow: hidden;
`;

const MenuItem = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 16px;
  font-size: 14px;
  color: var(--gray60);
  cursor: pointer;

  &:hover {
    background-color: var(--gray10);
  }

  svg {
    margin-right: 8px;
  }
`;

const QuestionContent = styled.div`
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

const AnswerContent = styled.div`
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
    color: var(--gray60);
    line-height: 1.6;
  }
`;

const AnswerForm = styled.div`
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

const SubmitButton = styled(StyledButton)`
  width: 100%;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
`;

const Footer = styled.div`
  display: flex;
  align-items: center;
  padding-top: 16px;
  border-top: 1px solid var(--gray20);
  gap: 16px;
`;

const ReactionButton = styled.div`
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

const Answer = ({
  question,
  answer,
  profileImage,
  username,
  timestamp,
  likes,
  dislikes = 0,
  isAnswered = false,
  onAnswerSubmit,
  onAnswerDelete,
  onAnswerUpdate,
  questionId,
  isPreview = false,
}) => {
  const [answerText, setAnswerText] = useState("");
  const [isLiked, setIsLiked] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);
  const [likeCount, setLikeCount] = useState(likes || 0);
  const [dislikeCount, setDislikeCount] = useState(dislikes || 0);
  const [showOptions, setShowOptions] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState("");

  const optionsRef = useRef(null);

  // 옵션 메뉴 외부 클릭 시 닫기
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (optionsRef.current && !optionsRef.current.contains(event.target)) {
        setShowOptions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // 수정 모드 진입 시 기존 답변 텍스트 설정
  useEffect(() => {
    if (isEditing && answer) {
      setEditText(answer);
    }
  }, [isEditing, answer]);

  // 시간 포맷팅 함수
  const formatTime = (timestamp) => {
    // 실제 구현에서는 날짜 라이브러리를 사용하여 포맷팅
    return timestamp || "2주전";
  };

  const handleAnswerChange = (e) => {
    setAnswerText(e.target.value);
  };

  const handleEditChange = (e) => {
    setEditText(e.target.value);
  };

  const handleSubmit = () => {
    if (answerText.trim() && onAnswerSubmit) {
      onAnswerSubmit(questionId, answerText);
      setAnswerText("");
    }
  };

  const handleUpdateSubmit = () => {
    if (editText.trim() && onAnswerUpdate) {
      onAnswerUpdate(questionId, editText);
      setIsEditing(false);
    }
  };

  const handleLike = () => {
    if (!isLiked) {
      setLikeCount((prev) => prev + 1);
      if (isDisliked) {
        setDislikeCount((prev) => prev - 1);
        setIsDisliked(false);
      }
      setIsLiked(true);
    } else {
      setLikeCount((prev) => prev - 1);
      setIsLiked(false);
    }
  };

  const handleDislike = () => {
    if (!isDisliked) {
      setDislikeCount((prev) => prev + 1);
      if (isLiked) {
        setLikeCount((prev) => prev - 1);
        setIsLiked(false);
      }
      setIsDisliked(true);
    } else {
      setDislikeCount((prev) => prev - 1);
      setIsDisliked(false);
    }
  };

  const handleOptionsClick = () => {
    setShowOptions(!showOptions);
  };

  const handleEdit = () => {
    setIsEditing(true);
    setShowOptions(false);
  };

  const handleDelete = () => {
    if (onAnswerDelete) {
      onAnswerDelete(questionId);
    }
    setShowOptions(false);
  };

  return (
    <Container>
      <Header>
        <BadgeContainer>
          <Badge isAnswered={isAnswered || isPreview}>
            {isAnswered || isPreview ? "답변 완료" : "미답변"}
          </Badge>
        </BadgeContainer>
        {!isPreview && (
          <OptionsButton onClick={handleOptionsClick}>
            <BiDotsHorizontalRounded size={24} />
          </OptionsButton>
        )}
        {showOptions && (
          <OptionsMenu ref={optionsRef}>
            {isAnswered && (
              <MenuItem onClick={handleEdit}>
                <BiEdit size={16} />
                수정하기
              </MenuItem>
            )}
            <MenuItem onClick={handleDelete}>
              <BiTrash size={16} />
              삭제하기
            </MenuItem>
          </OptionsMenu>
        )}
      </Header>

      <QuestionContent>
        <div
          className="question-label"
          style={{ display: "flex", alignItems: "center" }}
        >
          질문
          <TimeInfo style={{ marginLeft: "8px" }}>
            {formatTime(timestamp)}
          </TimeInfo>
        </div>
        <div className="content">{question}</div>
      </QuestionContent>

      {/* 답변이 있고 수정 중이 아닐 경우 답변 내용 표시 */}
      {(isAnswered || isPreview) && !isEditing && (
        <AnswerContent>
          <div className="profile-section">
            <img src={profileImage} alt="프로필 이미지" />
            <div className="username">{username}</div>
          </div>
          <div className="answer-text">{answer}</div>
        </AnswerContent>
      )}

      {/* 수정 모드일 경우 수정 폼 표시 */}
      {isEditing && (
        <AnswerForm>
          <textarea
            placeholder="답변을 수정해주세요"
            value={editText}
            onChange={handleEditChange}
          />
          <div className="button-container">
            <SubmitButton
              variant="submit"
              onClick={handleUpdateSubmit}
              disabled={!editText.trim()}
            >
              수정 완료
            </SubmitButton>
          </div>
        </AnswerForm>
      )}

      {/* 답변이 없고 미리보기 모드가 아닐 경우 답변 입력 폼 표시 */}
      {!isAnswered && !isPreview && !isEditing && (
        <AnswerForm>
          <textarea
            placeholder="답변을 입력해주세요"
            value={answerText}
            onChange={handleAnswerChange}
          />
          <div className="button-container">
            <SubmitButton
              variant="submit"
              onClick={handleSubmit}
              disabled={!answerText.trim()}
            >
              답변 완료
            </SubmitButton>
          </div>
        </AnswerForm>
      )}

      <Footer>
        <ReactionButton active={isLiked} onClick={handleLike}>
          <BiLike size={18} />
          <span>좋아요 {likeCount}</span>
        </ReactionButton>
        <ReactionButton active={isDisliked} onClick={handleDislike}>
          <BiDislike size={18} />
          <span>싫어요 {dislikeCount}</span>
        </ReactionButton>
      </Footer>
    </Container>
  );
};

export default Answer;
