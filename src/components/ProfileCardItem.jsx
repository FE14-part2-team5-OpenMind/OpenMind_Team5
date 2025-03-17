import React from "react";
import messages from "../assets/icons/Messages.svg";
import styled from "styled-components";

const Card = styled.div`
  height: 187px;
  width: 100%; /* 100%로 설정하여 그리드 레이아웃에 맞춰 크기 조정 */
  max-width: 220px; /* 카드의 최대 너비 220px로 설정 */
  min-width: 186px; /* 카드의 최소 너비 186px로 설정 */
  border-radius: 12px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: white;
  border: 1px solid var(--Grayscale-40);
  cursor: pointer;

  @media (max-width: 800px) {
    width: 100%;
    max-width: 220px; /* 화면이 줄어들어도 220px로 유지 */
    min-width: 186px; /* 최소 186px로 유지 */
  }

  @media screen and (max-width: 767px) {
    width: 156px;
    height: 168px;
  }
`;

const UserNameContainer = styled.div`
  width: 100%;
  height: 97px;
  padding-left: 13px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const ProfileImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 15px;
`;

const Username = styled.h3`
  font-size: 20px;
  font-weight: 400;
`;

const QuestionContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: var(--Grayscale-40);
  font-size: 14px;
`;

const QuestionIcon = styled.span`
  display: flex;
  align-items: center;

  > img {
    width: 20px;
    height: 20px;
    opacity: 0.6;
  }
`;

const QuestionCount = styled.span`
  margin-left: auto;
`;

const ProfileCardItem = ({ profile }) => {
  const { id, name, imageSource, questionCount } = profile;
  return (
    <Card key={id}>
      <UserNameContainer>
        <ProfileImage src={imageSource} alt="profile" />
        <Username>{name}</Username>
      </UserNameContainer>
      <QuestionContainer>
        <QuestionIcon>
          <img src={messages} alt="messages" />
          <div>받은 질문</div>
        </QuestionIcon>
        <QuestionCount>{questionCount}개</QuestionCount>
      </QuestionContainer>
    </Card>
  );
};

export default ProfileCardItem;
