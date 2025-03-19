import styled from "styled-components";

export const Card = styled.div`
  height: 187px;
  width: 100%;
  max-width: 220px;
  min-width: 186px;
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
    max-width: 220px;
    min-width: 186px;
  }

  @media screen and (max-width: 767px) {
    width: 156px;
    height: 168px;
  }
`;

export const UserNameContainer = styled.div`
  width: 100%;
  height: 97px;
  padding-left: 13px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const ProfileImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 15px;
`;

export const Username = styled.h3`
  font-size: 20px;
  font-weight: 400;
  color: black;
`;

export const QuestionContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: var(--Grayscale-40);
  font-size: 14px;
`;

export const QuestionIcon = styled.span`
  display: flex;
  align-items: center;

  > img {
    width: 20px;
    height: 20px;
    opacity: 0.6;
  }
`;

export const QuestionCount = styled.span`
  margin-left: auto;
`;
