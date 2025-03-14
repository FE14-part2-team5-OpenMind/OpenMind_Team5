import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { StyledButton } from "../styles/buttonStyle";
import logo from "../assets/images/logo.png";
import backgroundImage from "../assets/images/IndividualFeed-BackgroundImage.png";
import message from "../assets/images/Messages.png";
import emptyIcon from "../assets/images/NoQuestion.svg";
import Answer from "../components/Answer";
import IconBox from "../components/IconBox";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  > img:first-child {
    width: 100%;
    height: 240px;
    object-fit: cover;

    @media (max-width: 767px) {
      height: 160px;
    }
  }
`;

const Logo = styled.img`
  width: 170px;
  height: 67px;
  position: absolute;
  top: 24px;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;

  @media (max-width: 767px) {
    width: 120px;
    height: auto;
    top: 16px;
  }
`;

const ProfileSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
  width: 100%;

  @media (max-width: 767px) {
    margin-bottom: 24px;
  }
`;

const Profile = styled.img`
  width: 136px;
  height: 136px;
  border-radius: 50%;
  object-fit: cover;
  margin-top: -60px;
  border: 4px solid white;

  @media (max-width: 767px) {
    width: 100px;
    height: 100px;
    margin-top: -50px;
  }
`;

const ProfileName = styled.span`
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

const IconBoxContainer = styled.div`
  margin-bottom: 16px;

  @media (max-width: 767px) {
    margin-bottom: 12px;
  }
`;

const ProfilePlaceholder = styled.div`
  width: 136px;
  height: 136px;
  border-radius: 50%;
  background-color: var(--gray20);
  margin-top: -60px;
  border: 4px solid white;

  @media (max-width: 767px) {
    width: 100px;
    height: 100px;
    margin-top: -50px;
  }
`;

const BodyWrapper = styled.div`
  width: 100%;
  max-width: 720px;
  padding: 0 24px;

  @media (max-width: 767px) {
    padding: 0 16px;
  }
`;

const EmptyIcon = styled.img`
  width: 240px;
  height: auto;
  margin: 40px auto;
  display: block;

  @media (max-width: 767px) {
    width: 180px;
    margin: 24px auto;
  }
`;

const QuestionsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const QuestionsWrapper = styled.div`
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

const QuestionCount = styled.div`
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

const AnswerPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userInfo, setUserInfo] = useState({
    name: "사용자",
    imageSource: "https://via.placeholder.com/36",
  });

  useEffect(() => {
    // 사용자 정보도 가져와야 합니다
    const fetchUserInfo = async () => {
      try {
        // 실제 API 호출 대신 임시 데이터
        const mockUserInfo = {
          name: "아초는고양이",
          imageSource: "https://via.placeholder.com/120",
        };

        setUserInfo(mockUserInfo);
      } catch (error) {
        console.error("사용자 정보를 불러오는데 실패했습니다:", error);
      }
    };

    // 모든 질문 목록을 가져옵니다
    const fetchQuestions = async () => {
      try {
        // 실제 API 호출 대신 임시 데이터
        const mockQuestions = [
          {
            id: "1",
            content: "좋아하는 동물은?",
            createdAt: new Date().toISOString(),
            isAnswered: false,
            answer: null,
            likes: 0,
          },
          {
            id: "2",
            content: "수정이나 삭제 버튼은 어디에 있나요?",
            createdAt: new Date().toISOString(),
            isAnswered: true,
            answer: {
              content:
                "카드 우측 메뉴 버튼을 클릭하면 플로팅 메뉴가 나오고 수정 삭제 기능을 구현해두었습니다.",
            },
            likes: 12,
          },
          {
            id: "3",
            content: "이 프로젝트에서 가장 어려웠던 부분은 무엇인가요?",
            createdAt: new Date().toISOString(),
            isAnswered: false,
            answer: null,
            likes: 0,
          },
        ];

        setQuestions(mockQuestions);
        setLoading(false);
      } catch (error) {
        console.error("질문 목록을 불러오는데 실패했습니다:", error);
        setLoading(false);
      }
    };

    fetchUserInfo();
    fetchQuestions();
  }, [id]);

  const handleLogoClick = () => {
    navigate("/");
  };

  const handleAnswerSubmit = (questionId, answerText) => {
    // 실제로는 API를 호출하여 답변을 제출해야 합니다
    console.log("답변 제출:", { questionId, content: answerText });

    // 테스트를 위해 로컬 상태 업데이트
    const updatedQuestions = questions.map((q) => {
      if (q.id === questionId) {
        return {
          ...q,
          isAnswered: true,
          answer: {
            content: answerText,
          },
        };
      }
      return q;
    });

    setQuestions(updatedQuestions);
  };

  const handleAnswerDelete = (questionId) => {
    // 실제로는 API를 호출하여 질문을 삭제해야 합니다
    console.log("질문 삭제:", { questionId });

    // 테스트를 위해 로컬 상태 업데이트
    const updatedQuestions = questions.filter((q) => q.id !== questionId);
    setQuestions(updatedQuestions);
  };

  const handleAnswerUpdate = (questionId, updatedText) => {
    // 실제로는 API를 호출하여 답변을 업데이트해야 합니다
    console.log("답변 업데이트:", { questionId, content: updatedText });

    // 테스트를 위해 로컬 상태 업데이트
    const updatedQuestions = questions.map((q) => {
      if (q.id === questionId && q.isAnswered) {
        return {
          ...q,
          answer: {
            ...q.answer,
            content: updatedText,
          },
        };
      }
      return q;
    });

    setQuestions(updatedQuestions);
  };

  if (loading) {
    return (
      <Wrapper>
        <img src={backgroundImage} alt="배경사진" />
        <Logo src={logo} alt="로고" onClick={handleLogoClick} />
        <ProfileSection>
          <ProfilePlaceholder />
          <p>로딩 중...</p>
        </ProfileSection>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <img src={backgroundImage} alt="배경사진" />
      <Logo src={logo} alt="로고" onClick={handleLogoClick} />

      <ProfileSection>
        <Profile src={userInfo.imageSource} />
        <ProfileName>{userInfo.name}</ProfileName>
        <IconBoxContainer>
          <IconBox />
        </IconBoxContainer>
      </ProfileSection>

      <BodyWrapper>
        {questions.length > 0 ? (
          <QuestionsWrapper>
            <QuestionCount>
              <img src={message} alt="질문 아이콘" />
              <span>{questions.length}개의 질문이 있습니다.</span>
            </QuestionCount>
            <QuestionsContainer>
              {questions.map((q) => (
                <Answer
                  key={q.id}
                  questionId={q.id}
                  question={q.content}
                  answer={q.answer?.content}
                  profileImage={userInfo.imageSource}
                  username={userInfo.name}
                  timestamp="2주전"
                  likes={q.likes}
                  dislikes={q.dislikes || 0}
                  isAnswered={q.isAnswered}
                  onAnswerSubmit={handleAnswerSubmit}
                  onAnswerDelete={handleAnswerDelete}
                  onAnswerUpdate={handleAnswerUpdate}
                />
              ))}
            </QuestionsContainer>
          </QuestionsWrapper>
        ) : (
          <>
            <QuestionCount>
              <img src={message} alt="질문 아이콘" />
              <span>아직 질문이 없습니다.</span>
            </QuestionCount>
            <EmptyIcon src={emptyIcon} alt="질문 없을 때 이미지" />
          </>
        )}
      </BodyWrapper>
    </Wrapper>
  );
};

export default AnswerPage;
