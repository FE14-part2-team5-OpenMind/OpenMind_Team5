import styled from "styled-components";
import openMindLogo from "../assets/images/Openmind.svg";
import ArrowRightIcon from "../assets/images/arrow-right.svg";
import ArrowDownIcon from "../assets/icons/Arrow-down.svg";
import ArrowUpIcon from "../assets/icons/Arrow-up.svg";
import React, { useState } from "react";
import Button from "../components/Button";

const QuestionList = () => {
  const [sortOrder, setSortOrder] = useState("이름순");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <Container>
      <Header>
        <Logo href="/">
          <img src={openMindLogo} alt="Logo" />
        </Logo>
        <Button variant="ask" icon={ArrowRightIcon}>
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
    </Container>
  );
};

export default QuestionList;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
`;

const Header = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
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
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px auto;
`;

const Title = styled.h1`
  font-size: 40px;
  font-weight: 400;
  margin-bottom: 25px;
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
`;
