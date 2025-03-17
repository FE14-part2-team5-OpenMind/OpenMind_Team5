import React, { useState } from "react";
import { BiLike, BiDislike, BiDotsVerticalRounded } from "react-icons/bi";
import { postLikeDislike } from "../services/postLikeDislike";
import TextForm from "./TextForm.jsx";
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

// 상대적 시간 계산 함수
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

// 드롭다운 메뉴 컴포넌트
const KebabMenu = ({ onEdit }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ position: "relative" }}>
      <BiDotsVerticalRounded
        size={20}
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen(!isOpen);
        }}
        style={{ cursor: "pointer" }}
      />
      {isOpen && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            right: 0,
            background: "#fff",
            border: "1px solid #ccc",
            borderRadius: "4px",
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
            zIndex: 1000,
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={() => {
              onEdit();
              setIsOpen(false);
            }}
            style={{
              padding: "8px 16px",
              width: "100%",
              textAlign: "left",
              border: "none",
              background: "none",
              cursor: "pointer",
              fontSize: "14px",
            }}
          >
            수정하기
          </button>
        </div>
      )}
    </div>
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
          setDislikeCount((prev) => prev - 1);
          setIsDisliked(false);
        }
        setIsLiked(true);
      } else {
        setLikeCount((prev) => prev - 1); // 취소 API 없음, 로컬 처리
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
          setLikeCount((prev) => prev - 1);
          setIsLiked(false);
        }
        setIsDisliked(true);
      } else {
        setDislikeCount((prev) => prev - 1); // 취소 API 없음, 로컬 처리
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

  const handleClose = () => {
    setIsEditing(false);
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
