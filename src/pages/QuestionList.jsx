import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../components/Button";
import ProfileCard from "../components/ProfileCard";
import AnswerModal from "../components/Modal/AnswerModal";

import { getAllDataSubjects } from "../api/apiSubjects";

import openMindLogo from "../assets/images/Openmind.svg";
import ArrowRightIcon from "../assets/images/arrow-right.svg";
import ArrowDownIcon from "../assets/icons/Arrow-down.svg";
import ArrowUpIcon from "../assets/icons/Arrow-up.svg";

const QuestionList = () => {
  const [sortOrder, setSortOrder] = useState("최신순");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [profiles, setProfiles] = useState(null);
  const [dataErrorMessage, setDataErrorMessage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userId, setUserId] = useState("");
  const [questionCounts, setQuestionCounts] = useState({});
  const navigate = useNavigate(); // useNavigate 훅을 사용합니다.

  // API 호출 함수
  const handleSubjectsData = async () => {
    try {
      const profiles = await getAllDataSubjects();
      setProfiles(profiles);
    } catch (error) {
      setDataErrorMessage(error.message);
    }
  };

  // 정렬 기준에 따라 정렬하기
  const sortProfiles = (profiles, sortOrder) => {
    if (sortOrder === "이름순") {
      return profiles?.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOrder === "최신순") {
      return profiles?.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
    }
    return profiles;
  };

  const sortedProfiles = sortProfiles(profiles?.results || [], sortOrder);

  useEffect(() => {
    handleSubjectsData();
  }, [sortOrder]);

  // 답변하러가기 버튼 함수
  const handleAnswerClick = () => {
    const storedFeeds = localStorage.getItem("feeds");

    if (!storedFeeds) {
      alert("아이디를 입력하세요.");
      navigate("/"); // alert 창을 띄운 후, index 페이지로 이동
      return;
    }

    const feedsObject = JSON.parse(storedFeeds);
    const feedsArray = Object.values(feedsObject);

    setUserId(feedsArray);
    setIsModalOpen(true);
  };

  useEffect(() => {
    if (profiles && userId && userId.length > 0) {
      const counts = {};
      userId.forEach((feed) => {
        const profile = profiles.results.find((p) => p.id === feed.id);
        if (profile) {
          const questionCount =
            profile.questionCount !== undefined ? profile.questionCount : 0;
          counts[feed.id] = questionCount;
        }
      });
      setQuestionCounts(counts);
    }
  }, [profiles, userId]);

  return (
    <Container>
      <Header>
        <Logo href="/">
          <img src={openMindLogo} alt="Logo" />
        </Logo>
        <Button variant="ask" icon={ArrowRightIcon} onClick={handleAnswerClick}>
          답변하러 가기
        </Button>
      </Header>

      <TitleContainer>
        <Title>누구에게 질문할까요?</Title>
        <SortDropdown onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
          <SortButton active={isDropdownOpen}>
            {sortOrder}{" "}
            <img
              src={isDropdownOpen ? ArrowUpIcon : ArrowDownIcon}
              active={isDropdownOpen}
              alt="Arrow"
            />
          </SortButton>
          {isDropdownOpen && (
            <DropdownMenu>
              <DropdownItem
                selected={sortOrder === "이름순"}
                onClick={() => {
                  setSortOrder("이름순");
                  setIsDropdownOpen(false);
                }}>
                이름순
              </DropdownItem>
              <DropdownItem
                selected={sortOrder === "최신순"}
                onClick={() => {
                  setSortOrder("최신순");
                  setIsDropdownOpen(false);
                }}>
                최신순
              </DropdownItem>
            </DropdownMenu>
          )}
        </SortDropdown>
      </TitleContainer>

      <ProfileCard
        profiles={{ results: sortedProfiles }}
        message={dataErrorMessage}
      />

      <AnswerModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        userId={userId}
        questionCounts={questionCounts} // 전달한 질문 개수
      />
    </Container>
  );
};

export default QuestionList;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;

  @media (max-width: 600px) {
    max-width: 100%;
    padding: 16px;
  }
`;

const Header = styled.nav`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 20px 0;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
`;

const Logo = styled.a`
  display: block;
  width: 146px;
  height: 57px;

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 600px) {
    width: 145px;
    height: auto;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 25px auto;

  @media (max-width: 600px) {
    flex-direction: row;
    justify-content: space-between;
    width: 370px;
  }
`;

const Title = styled.h1`
  font-size: 40px;
  font-weight: 400;
  margin-bottom: 25px;

  @media (max-width: 600px) {
    font-size: 24px;
    margin-bottom: 0;
  }
`;

const SortDropdown = styled.div`
  position: relative;
  display: inline-block;
  cursor: pointer;
`;

const SortButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  width: 89px;
  height: 34px;
  background: white;
  border: ${({ active }) =>
    active ? "1px solid black" : "1px solid var(--Grayscale-40)"};
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  color: ${({ active }) => (active ? "black" : "var(--Grayscale-40)")};

  > img {
    width: 18px;
    height: 16px;
    filter: ${({ active }) => (active ? "none" : "grayscale(100%)")};
    opacity: ${({ active }) => (active ? "1" : "0.6")};
  }

  @media (max-width: 600px) {
    width: 80px;
    height: 30px;
    font-size: 12px;
  }
`;

const DropdownMenu = styled.ul`
  position: absolute;
  top: 40px;
  left: 0;
  width: 89px;
  background: white;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  list-style: none;
  padding: 5px 0;
  z-index: 1000;

  @media (max-width: 600px) {
    width: 80px;
  }
`;

const DropdownItem = styled.li`
  padding: 10px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  text-align: center;
  color: ${({ selected }) => (selected ? "var(--blue50)" : "black")};

  &:hover {
    background: #f0f0f0;
  }

  @media (max-width: 600px) {
    font-size: 12px;
    padding: 8px;
  }
`;
