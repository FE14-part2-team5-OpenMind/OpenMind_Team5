import styled from "styled-components";
import openMindLogo from "../assets/images/Openmind.svg";
import ArrowRightIcon from "../assets/images/arrow-right.svg";
import ArrowDownIcon from "../assets/icons/Arrow-down.svg";
import Button from "../components/Button";
import React, { useState } from "react";

const QuestionList = () => {
  const [sortOrder, setSortOrder] = useState("이름순");

  // 더미 데이터 (API로 가져올 경우 대체 가능)
  // const profiles = Array(8).fill({
  //   name: "아초는고양이",
  //   questionCount: 9,
  //   avatarUrl: "https://example.com/cat.jpg", // 실제 이미지 URL로 변경
  // });

  return (
    <Container>
      <Header>
        <Logo href="/">
          <img src={openMindLogo} />
        </Logo>
        <Button variant="ask" icon={ArrowRightIcon}>
          답변하러 가기
        </Button>
      </Header>

      <Title>누구에게 질문할까요?</Title>

      <SortDropdown>
        <button
          onClick={() =>
            setSortOrder(sortOrder === "이름순" ? "최신순" : "이름순")
          }>
          {/* {sortOrder} */}
          이름순
        </button>
        <div>
          <img src={ArrowDownIcon} />
        </div>

        {/* <DropdownMenu>
          <li onClick={() => setSortOrder("이름순")}>이름순</li>
          <li onClick={() => setSortOrder("최신순")}>최신순</li>
        </DropdownMenu> */}
      </SortDropdown>

      {/* <Grid>
        {profiles.map((profile, index) => (
          <ProfileCard key={index} {...profile} />
        ))}
      </Grid>

      <Pagination totalPages={5} currentPage={4} /> */}
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

const Header = styled.div`
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
    overflow: hidden;
  }
`;

const Title = styled.h1`
  font-size: 40px;
  font-weight: 400;
  margin-bottom: 25px;
`;

const SortDropdown = styled.div`
  margin: 0 auto;
  width: 79px;
  height: 34px;
  display: flex;
  justify-content: space-around;
  gap: 1px;
  background: white;
  border: 1px solid var(--Grayscale-40);
  border-radius: 8px;
  cursor: pointer;

  > button {
    all: unset;
    display: block;
    font-size: 14px;
    font-weight: 500;
  }

  > div {
    align-self: center;

    width: 15px;
    height: 10px;
  }

  > div img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
  }
`;

const DropdownMenu = styled.ul`
  display: none;
  position: absolute;
  background: white;
  list-style: none;
  margin: 0;
  padding: 0;
  border: 1px solid #ccc;

  li {
    padding: 8px;
    cursor: pointer;

    &:hover {
      background: #f0f0f0;
    }
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 16px;
  margin-top: 20px;
`;
