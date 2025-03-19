import ArrowIcon from "../assets/images/arrow-right.svg";
import Mainlogo from "../assets/images/Openmind.svg";
import PersonIcon from "../assets/images/Person.svg";
import Button from "../components/Button";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  WrapperContainer,
  HeaderWrapper,
  Header,
  LogoImage,
  MainContainer,
  FormContainer,
  InputField,
  UserIcon,
  NameInput,
} from "../styles/mainpageStyle";
import { sendUserName } from "../services/mainpageService";
import { useNavigate } from "react-router-dom";

function MainPage() {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  const addUser = (name, id) => {
    let feeds = JSON.parse(localStorage.getItem("feeds")) || {};

    const newUser = { 이름: name, id: id };

    feeds[id] = newUser;

    localStorage.setItem("feeds", JSON.stringify(feeds));
  };

  const handleSubmit = async () => {
    //질문받기 버튼을 클릭하면 피드 생성 후 id를 가지고 응답 페이지로 이동
    try {
      const response = await sendUserName(name);
      console.log(response);

      if (response?.id) {
        addUser(name, response.id);

        console.log(JSON.parse(localStorage.getItem("feeds")));
        navigate(`/post/${response.id}/answer`);
      } else {
        console.error("응답에 ID가 없습니다.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <WrapperContainer>
        <HeaderWrapper>
          <Header>
            <Link to={"/list"}>
              <Button variant="ask" icon={ArrowIcon}>
                질문하러 가기
              </Button>
            </Link>
          </Header>
          <LogoImage src={Mainlogo} alt="메인 로고" />
        </HeaderWrapper>

        <MainContainer>
          <FormContainer>
            <InputField>
              <UserIcon src={PersonIcon} />
              <NameInput
                placeholder="이름을 입력하세요"
                value={name}
                onChange={handleInputChange}
              />
            </InputField>
            <Button variant="submit" onClick={handleSubmit}>
              질문 받기
            </Button>
          </FormContainer>
        </MainContainer>
      </WrapperContainer>
    </>
  );
}

export default MainPage;
