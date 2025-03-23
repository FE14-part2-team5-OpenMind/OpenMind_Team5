import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Header,
  Logo,
  TitleContainer,
  Title,
  SortDropdown,
  SortButton,
  DropdownMenu,
  DropdownItem,
} from "../styles/questionListStyle";

import Button from "../components/Button";
import ProfileCard from "../components/ProfileCard";
import AnswerModal from "../components/Modal/AnswerModal";

import { getAllDataSubjects } from "../services/apiSubjects";

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
  const [userId, setUserId] = useState([]);
  const [questionCounts, setQuestionCounts] = useState({});
  const navigate = useNavigate();

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
      navigate("/");
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
        <Logo to="/">
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
        questionCounts={questionCounts}
      />
    </Container>
  );
};

export default QuestionList;
