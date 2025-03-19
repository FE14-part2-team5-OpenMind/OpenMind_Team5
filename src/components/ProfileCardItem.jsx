import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  UserNameContainer,
  ProfileImage,
  Username,
  QuestionContainer,
  QuestionIcon,
  QuestionCount,
} from "../styles/profileCardItemStyle";

import messages from "../assets/icons/Messages.svg";

const ProfileCardItem = ({ profile }) => {
  const { id, name, imageSource, questionCount } = profile;
  return (
    <Link to={`/post/${id}`}>
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
    </Link>
  );
};

export default ProfileCardItem;
