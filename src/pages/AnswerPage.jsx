import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.png";
import backgroundImage from "../assets/images/IndividualFeed-BackgroundImage.png";
import message from "../assets/images/Messages.png";
import emptyIcon from "../assets/images/NoQuestion.svg";
import Answer from "../components/Answer";
import IconBox from "../components/IconBox";
import AddQuestion from "../components/AddQuestion";
import Modal from "../components/Modal/Modal";
import {
  Wrapper,
  Logo,
  Profile,
  ProfilePlaceholder,
  BodyWrapper,
  EmptyIcon,
} from "../styles/individualFeedStyle";
import {
  DeleteButton,
  Toast,
  RotatingAnimation,
} from "../styles/AnswerPageStyle";
import { useSubjectInfo } from "../hooks/useSubjectInfo";
import { useIndividualQuestions } from "../hooks/useIndividualQuestions";
import { useScroll } from "../hooks/useScroll";
import { deleteQuestion } from "../services/answerService";

const AnswerPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [offset, setOffset] = useState(0);
  const [showQuestionForm, setShowQuestionForm] = useState(false);
  const LIMIT = 10;

  const { userInfo } = useSubjectInfo();
  const { questionInfo, count, setSend, setQuestionInfo } =
    useIndividualQuestions({
      offset,
      limit: LIMIT,
    });
  const { moreData } = useScroll({ setOffset, questionInfo, LIMIT, count });
  const [loading, setLoading] = useState(true);
  const [toastMessage, setToastMessage] = useState("");

  useEffect(() => {
    if (userInfo && questionInfo !== null && questionInfo !== undefined) {
      setLoading(false);
    } else {
      setLoading(true);
    }
  }, [userInfo, questionInfo, id]);

  useEffect(() => {
    setOffset(0);
  }, [id]);

  const handleLogoClick = () => {
    navigate("/");
  };

  const handleQuestionDelete = async (questionId) => {
    try {
      await deleteQuestion({ questionId });
      setQuestionInfo((prev) => prev.filter((q) => q.id !== questionId));
      setSend(true);
      setToastMessage("질문이 삭제되었습니다.");
      setTimeout(() => setToastMessage(""), 3000);
    } catch (error) {
      console.error("질문 삭제 실패:", error.message || error);
      setToastMessage("질문 삭제에 실패했습니다.");
      setTimeout(() => setToastMessage(""), 3000);
    }
  };

  const handleQuestionSubmit = (response) => {
    setShowQuestionForm(false);
    if (response) {
      setQuestionInfo((prev) => [response, ...prev]);
      setSend(true);
      setOffset(0);
    }
  };

  const handleAddQuestionClick = () => {
    if (!loading && userInfo) {
      // 수정: 로딩 중이거나 userInfo 없으면 모달 열리지 않음
      setShowQuestionForm(true);
    }
  };

  const handleModalClose = () => {
    setShowQuestionForm(false);
  };

  return (
    <Wrapper>
      <img src={backgroundImage} alt="배경사진" />
      <Logo src={logo} alt="로고" onClick={handleLogoClick} />
      {loading || !userInfo ? (
        <ProfilePlaceholder />
      ) : (
        <Profile src={userInfo.imageSource} />
      )}
      <span className="profileName">
        {loading || !userInfo ? "로딩 중..." : userInfo.name}
      </span>
      <IconBox />
      {questionInfo?.length > 0 && (
        <DeleteButton onClick={() => handleQuestionDelete(questionInfo[0].id)}>
          삭제하기
        </DeleteButton>
      )}
      <br />
      <BodyWrapper count={count}>
        <div className="questionNum">
          <img src={message} alt="질문 아이콘" />
          <span>
            {count === 0
              ? "아직 질문이 없습니다."
              : `${count}개의 질문이 있습니다.`}
          </span>
        </div>
        {loading ? (
          <>
            {Array.from({ length: 5 }).map((_, index) => (
              <Answer key={index} isPreview={true} />
            ))}
          </>
        ) : questionInfo?.length > 0 ? (
          questionInfo.map((q, index) => (
            <React.Fragment key={q.id}>
              <Answer
                questionId={q.id}
                question={q.content}
                answer={q.answer}
                profileImage={userInfo?.imageSource || ""}
                username={userInfo?.name || "Unknown"}
                timestamp={q.createdAt}
                isAnswered={q.isAnswered || !!q.answer}
                setSend={setSend}
                setOffset={setOffset}
                setQuestionInfo={setQuestionInfo}
              />
              {index < questionInfo.length - 1 && <br />}
            </React.Fragment>
          ))
        ) : (
          <EmptyIcon src={emptyIcon} alt="질문 없을 때 이미지" />
        )}
        {moreData && questionInfo && questionInfo.length < count && (
          <RotatingAnimation />
        )}
        <AddQuestion onClick={handleAddQuestionClick} />
        {showQuestionForm && (
          <Modal
            onClose={handleModalClose}
            userInfo={userInfo}
            setSend={setSend}
            setOffset={setOffset}
          />
        )}
      </BodyWrapper>
      {toastMessage && <Toast>{toastMessage}</Toast>}
    </Wrapper>
  );
};

export default AnswerPage;
