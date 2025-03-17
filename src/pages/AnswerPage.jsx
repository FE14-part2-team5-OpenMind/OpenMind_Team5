import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.png";
import backgroundImage from "../assets/images/IndividualFeed-BackgroundImage.png";
import message from "../assets/images/Messages.png";
import emptyIcon from "../assets/images/NoQuestion.svg";
import Answer from "../components/Answer";
import IconBox from "../components/IconBox";
import TextForm from "../components/TextForm";
import {
  Wrapper,
  Logo,
  Profile,
  ProfilePlaceholder,
  BodyWrapper,
  EmptyIcon,
} from "../styles/individualFeedStyle";
import { useSubjectInfo } from "../hooks/useSubjectInfo";
import { useIndividualQuestions } from "../hooks/useIndividualQuestions";
import { useScroll } from "../hooks/useScroll";
import { RotatingAnimation } from "../styles/rotatingAnimation";
import { deleteQuestion } from "../services/answerService";

const AnswerPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [offset, setOffset] = useState(0);
  const [showQuestionForm, setShowQuestionForm] = useState(false);
  const LIMIT = 10;

  const { userInfo } = useSubjectInfo();
  const { questionInfo, count, setSend } = useIndividualQuestions({
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
      await deleteQuestion({ questionId }); // 객체로 변경
      setSend(true);
      setToastMessage("질문이 삭제되었습니다.");
      setTimeout(() => setToastMessage(""), 3000);
    } catch (error) {
      console.error("질문 삭제 실패:", error);
      setToastMessage("질문 삭제에 실패했습니다.");
      setTimeout(() => setToastMessage(""), 3000);
    }
  };

  const handleQuestionSubmit = () => {
    setShowQuestionForm(false);
    setSend(true);
    setOffset(0);
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
      {questionInfo.length > 0 && (
        <button
          onClick={() => handleQuestionDelete(questionInfo[0].id)}
          style={{
            position: "absolute",
            top: "380px",
            right: "calc(50% - 716px / 2 + 24px)",
            padding: "12px 24px",
            background: "var(--brown40)",
            color: "white",
            border: "none",
            borderRadius: "24px",
            fontSize: "16px",
            cursor: "pointer",
            "@media (max-width: 767px)": {
              right: "calc(50% - 327px / 2 + 16px)",
            },
          }}
          onMouseOver={(e) => (e.target.style.background = "var(--brown50)")}
          onMouseOut={(e) => (e.target.style.background = "var(--brown40)")}
        >
          삭제하기
        </button>
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
        <button
          onClick={() => setShowQuestionForm(true)}
          style={{
            marginTop: "20px",
            padding: "12px 24px",
            background: "var(--brown40)",
            color: "white",
            border: "none",
            borderRadius: "24px",
            cursor: "pointer",
          }}
        >
          질문 작성하기
        </button>
        {showQuestionForm && (
          <TextForm
            placeholder="질문을 입력해주세요"
            buttonText="질문 보내기"
            id={id}
            mode="question"
            onClose={handleQuestionSubmit}
            setSend={setSend}
            setOffset={setOffset}
          />
        )}
      </BodyWrapper>
      {toastMessage && (
        <div
          style={{
            position: "fixed",
            bottom: "50px",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 999,
            padding: "12px 20px",
            background: "#757575",
            color: "#F5F5F5",
            borderRadius: "8px",
            boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
            fontSize: "14px",
            fontWeight: 500,
            lineHeight: "18px",
          }}
        >
          {toastMessage}
        </div>
      )}
    </Wrapper>
  );
};

export default AnswerPage;
