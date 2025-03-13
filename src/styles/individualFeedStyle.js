import styled, { keyframes } from "styled-components";

const placeholderGlow = keyframes`
    50% {
    opacity: 0.2;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  position: relative;

  span.profileName {
    position: absolute;
    top: 277px;
    font: var(--body1-regular);
    font-size: 3.2rem;

    @media (max-width: 767px) {
      font-size: 2.4rem;
    }
  }
`;

export const Logo = styled.img`
  position: absolute;
  top: 50px;
`;

export const Profile = styled.img`
  position: absolute;
  top: 129px;
  width: 136px;
  height: 136px;
  border-radius: 50%;

  @media (max-width: 767px) {
    width: 104px;
    height: 104px;
  }
`;

export const ProfilePlaceholder = styled.img`
  position: absolute;
  top: 129px;
  width: 136px;
  height: 136px;
  border-radius: 50%;
  background: var(--gray30);
  animation: ${placeholderGlow} 1.5s infinite ease-in-out;

  @media (max-width: 767px) {
    width: 104px;
    height: 104px;
  }
`;

export const Icons = styled.div`
  position: absolute;
  top: 329px;
  display: flex;
  flex-direction: row;
  gap: 12px;
`;

export const Icon = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${({ colorType }) =>
    colorType === "facebook"
      ? "var(--blue50)"
      : colorType === "kakao"
      ? "var(--yellow50)"
      : colorType === "link"
      ? "var(--brown50)"
      : "var(--gray50)"};
  color: white;
  font-size: 1.5rem;
  text-decoration: none;
  cursor: pointer;
`;

export const BodyWrapper = styled.div`
  margin-top: 189px !important;
  width: 716px;
  padding: 0 16px;
  padding-bottom: 16px;
  background-color: var(--brown30);
  border-radius: 16px;
  margin-bottom: 136px;

  @media (max-width: 767px) {
    width: 327px;
  }

  div.questionNum {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 16px;
    margin-left: auto;
    margin-right: auto;

    span {
      color: var(--brown40);
      font: var(--body2-bold);
      font-size: 2rem;

      @media (max-width: 767px) {
        font-size: 1.8rem;
      }
    }
  }
`;
