import React, { useState, useRef, useEffect } from "react";
import {
  BiLike,
  BiDislike,
  BiDotsHorizontalRounded,
  BiEdit,
  BiTrash,
} from "react-icons/bi";
import {
  Container,
  Header,
  BadgeContainer,
  Badge,
  TimeInfo,
  OptionsButton,
  OptionsMenu,
  MenuItem,
  QuestionContent,
  AnswerContent,
  AnswerForm,
  SubmitButton,
  Footer,
  ReactionButton,
} from "../styles/AnswerStyle";

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
