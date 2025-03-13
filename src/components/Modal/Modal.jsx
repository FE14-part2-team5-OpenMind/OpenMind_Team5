import MessagesIcon from "../../assets/icons/Messages.svg";
import CloseIcon from "../../assets/icons/Close.svg";
// import profileImg from "../../assets/images/profile-image.svg";
import { useState } from "react";
import {
  Background,
  Container,
  TitleContainer,
  TitleWrapper,
  Message,
  Close,
  Receiver,
  To,
  Profile,
  TextArea,
  SendingButton,
} from "../../styles/modalStyle";
import useModal from "../../hooks/useModal";

const Modal = ({ userInfo }) => {
  const [textValue, setTextValue] = useState("");
  const { setOpen, open } = useModal();

  const handleModalClose = (e) => {
    // 모달창 상태변화 기능 구현
    if (e.target === e.currentTarget) {
      setOpen(!open);
    }
  };

  const handleTextChange = (e) => {
    // TextArea 상태 변화
    const nextValue = e.target.value;
    setTextValue(nextValue);
  };

  return (
    <Background onClick={handleModalClose}>
      <Container>
        <TitleContainer>
          <TitleWrapper>
            <Message src={MessagesIcon} alt="Message" />
            <h3>질문을 작성하세요</h3>
          </TitleWrapper>
          <Close src={CloseIcon} alt="close" onClick={handleModalClose} />
        </TitleContainer>
        <Receiver>
          <To>To.</To>
          <Profile src={userInfo?.imageSource} alt="프로필 이미지" />
          {/* userName 연결 */}
          {/* 아초는 고양이  */}
          {userInfo?.name}
        </Receiver>
        {/* Question 입력 공간 */}
        <TextArea
          placeholder="질문을 입력해주세요"
          value={textValue}
          onChange={handleTextChange}
        />
        <SendingButton>질문 보내기</SendingButton>
      </Container>
    </Background>
  );
};

export default Modal;
