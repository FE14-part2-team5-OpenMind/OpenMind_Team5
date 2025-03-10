import ArrowIcon from '../assets/images/arrow-right.svg';
import Mainlogo from '../assets/images/Openmind.svg';
import PersonIcon from '../assets/images/Person.svg';
import Button from '../components/Button';
import { useState } from 'react';
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
} from '../styles/mainpageStyle';

function MainPage() {
  const [name, setName] = useState('');

  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  return (
    <>
      <WrapperContainer>
        <HeaderWrapper>
          <Header>
            <Button variant="ask" icon={ArrowIcon}>
              질문하러 가기
            </Button>
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
            <Button variant="submit">질문 받기</Button>
          </FormContainer>
        </MainContainer>
      </WrapperContainer>
    </>
  );
}

export default MainPage;
