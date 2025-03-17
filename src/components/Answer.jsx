import React, { useState } from "react";
import { BiLike, BiDislike, BiDotsVerticalRounded } from "react-icons/bi";
import { postLikeDislike } from "../services/answerService";
import TextForm from "./TextForm.jsx";
import styled from "styled-components";
import {
  Container,
  Header,
  BadgeContainer,
  Badge,
  TimeInfo,
  QuestionContent,
  UsernameHeader,
  AnswerContent,
  AnswerForm,
  SubmitButton,
  Footer,
  ReactionButton,
} from "../styles/AnswerStyle";

// KebabMenu 스타일 정의
const KebabContainer = styled.div`
  position: relative;
`;

const KebabMenuWrapper = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

const KebabButton = styled.button`
  padding: 8px 16px;
  min-width: 80px; /* 최소 너비 설정으로 가로 표시 보장 */
  text-align: left;
  border: none;
  background: none;
  cursor: pointer;
  font-size: 14px;
  white-space: nowrap; /* 줄바꿈 방지 */
  &:hover {
    background: #f5f5f5; /* 호버 효과 추가 */
  }
`;

const formatTime = (timestamp) => {
  if (!timestamp) return "방금 전";
  const now = new Date();
  const date = new Date(timestamp);
  const diffInSeconds = Math.floor((now - date) / 1000);

  if (diffInSeconds < 60) return "방금 전";
  if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}분 전`;
  if (diffInSeconds < 86400)
    return `${Math.floor(diffInSeconds / 3600)}시간 전`;
  if (diffInSeconds < 604800)
    return `${Math.floor(diffInSeconds / 86400)}일 전`;
  return `${Math.floor(diffInSeconds / 604800)}주 전`;
};

const KebabMenu = ({ onEdit }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <KebabContainer>
      <BiDotsVerticalRounded
        size={20}
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen(!isOpen);
        }}
        style={{ cursor: "pointer" }}
      />
      {isOpen && (
        <KebabMenuWrapper onClick={(e) => e.stopPropagation()}>
          <KebabButton
            onClick={() => {
              onEdit();
              setIsOpen(false);
            }}
          >
            수정하기
          </KebabButton>
        </KebabMenuWrapper>
      )}
    </KebabContainer>
  );
};

const Answer = ({
  question,
  answer,
  profileImage,
  username,
  timestamp,
  isAnswered,
  questionId,
  isPreview = false,
  setSend,
  setOffset,
  setQuestionInfo,
}) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);
  const [likeCount, setLikeCount] = useState(answer?.likes || 0);
  const [dislikeCount, setDislikeCount] = useState(answer?.dislikes || 0);
  const [isEditing, setIsEditing] = useState(false);

  const handleLike = async () => {
    try {
      if (!isLiked) {
        const response = await postLikeDislike({
          id: questionId,
          type: "like",
        });
        setLikeCount(response.like);
        if (isDisliked) {
          setDislikeCount(response.dislike);
          setIsDisliked(false);
        }
        setIsLiked(true);
      } else {
        setLikeCount((prev) => prev - 1);
        setIsLiked(false);
      }
    } catch (error) {
      console.error("좋아요 처리 실패:", error);
    }
  };

  const handleDislike = async () => {
    try {
      if (!isDisliked) {
        const response = await postLikeDislike({
          id: questionId,
          type: "dislike",
        });
        setDislikeCount(response.dislike);
        if (isLiked) {
          setLikeCount(response.like);
          setIsLiked(false);
        }
        setIsDisliked(true);
      } else {
        setDislikeCount((prev) => prev - 1);
        setIsDisliked(false);
      }
    } catch (error) {
      console.error("싫어요 처리 실패:", error);
    }
  };

  const handleEdit = () => {
    if (!answer?.id) {
      console.error("수정할 답변 ID가 없습니다.");
      return;
    }
    setIsEditing(true);
  };

  const handleClose = (response) => {
    setIsEditing(false);
    if (response) {
      setQuestionInfo((prev) =>
        prev.map((q) =>
          q.id === questionId ? { ...q, answer: response, isAnswered: true } : q
        )
      );
      setSend(true);
    }
  };

  return (
    <Container>
      <Header>
        <BadgeContainer
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Badge isAnswered={isAnswered || isPreview}>
            {isAnswered || isPreview ? "답변 완료" : "미답변"}
          </Badge>
          {isAnswered && !isEditing && !isPreview && (
            <KebabMenu onEdit={handleEdit} />
          )}
        </BadgeContainer>
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

      {isAnswered && !isEditing && (
        <AnswerContent>
          <div className="profile-section">
            <img src={profileImage} alt="프로필 이미지" />
            <div className="username">{username}</div>
          </div>
          <div className="answer-text">{answer?.content}</div>
        </AnswerContent>
      )}

      {(isEditing || !isAnswered) && !isPreview && (
        <>
          <UsernameHeader>{username}</UsernameHeader>
          <TextForm
            placeholder={
              isEditing ? "답변을 수정해주세요" : "답변을 입력해주세요"
            }
            buttonText={isEditing ? "수정 완료" : "답변 완료"}
            id={questionId}
            mode="answer"
            onClose={handleClose}
            setSend={setSend}
            setOffset={setOffset}
            initialContent={isEditing ? answer?.content : ""}
            answerId={isEditing ? answer?.id : null}
            isEditing={isEditing}
          />
        </>
      )}

      <Footer>
        <ReactionButton active={isLiked} onClick={handleLike}>
          <BiLike size={18} />
          <span>좋아요</span>
          {!isPreview && (isAnswered || isEditing) && <span> {likeCount}</span>}
        </ReactionButton>
        <ReactionButton active={isDisliked} onClick={handleDislike}>
          <BiDislike size={18} />
          <span>싫어요</span>
          {!isPreview && (isAnswered || isEditing) && (
            <span> {dislikeCount}</span>
          )}
        </ReactionButton>
      </Footer>
    </Container>
  );
};

export default Answer;
