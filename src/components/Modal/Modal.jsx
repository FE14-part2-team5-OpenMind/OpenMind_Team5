import MessagesIcon from "../../assets/icons/Messages.svg";
import CloseIcon from "../../assets/icons/Close.svg";
import TextForm from "../TextForm";
import {
  Background,
  Container,
  TitleContainer,
  TitleWrapper,
  Message,
  Title,
  Close,
  Receiver,
  To,
  Profile,
} from "../../styles/modalStyle";

const Modal = ({ onClose, userInfo, setSend, setOffset }) => {
  const handleModalClose = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // 수정: userInfo가 없으면 렌더링 중단
  if (!userInfo) return null;

  return (
    <Background onClick={handleModalClose}>
      <Container>
        <TitleContainer>
          <TitleWrapper>
            <Message src={MessagesIcon} alt="Message" />
            <Title>질문을 작성하세요</Title>
          </TitleWrapper>
          <Close src={CloseIcon} alt="close" onClick={handleModalClose} />
        </TitleContainer>
        <Receiver>
          <To>To.</To>
          <Profile src={userInfo.imageSource} alt="프로필 이미지" />
          {userInfo.name}
        </Receiver>
        <TextForm
          placeholder="질문을 입력해주세요"
          buttonText="질문 보내기"
          id={userInfo.id} // subject_id -> id로 변경
          mode="question" // 질문 모드 유지
          onClose={onClose}
          setSend={setSend}
          setOffset={setOffset}
        />
      </Container>
    </Background>
  );
};

export default Modal;
