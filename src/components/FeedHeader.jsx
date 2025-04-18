import {
  Logo,
  Profile,
  ProfilePlaceholder,
  Wrapper,
} from "../styles/individualFeedStyle";
import React from "react";
import IconBox from "../components/IconBox";
import logo from "../assets/images/logo.png";
import backgroundImage from "../assets/images/IndividualFeed-BackgroundImage.png";
import { useNavigate } from "react-router-dom";

const FeedHeader = ({ userInfo, setToast }) => {
  const navigate = useNavigate();

  const navigateToMain = () => {
    navigate("/");
  };

  return (
    <>
      {/* 배경사진, 사용자 이름은 userInfo에서 가져온다 */}
      <img src={backgroundImage} alt="배경사진" />
      <Logo src={logo} alt="로고" onClick={navigateToMain} />
      {userInfo ? (
        <Profile src={userInfo?.imageSource} />
      ) : (
        <ProfilePlaceholder />
      )}
      <span className="profileName">{userInfo?.name}</span>

      {/* 아이콘 컴포넌트 */}
      <IconBox setToast={setToast} />
    </>
  );
};

export default FeedHeader;