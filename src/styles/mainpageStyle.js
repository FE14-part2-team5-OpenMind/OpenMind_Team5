import styled from 'styled-components';
import MainImage from '../assets/images/MainImage.png';

export const WrapperContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  background-color: #f9f9f9;
`;

export const MainContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #f9f9f9;
  background-image: url(${MainImage});
  background-repeat: no-repeat;
  background-position: bottom center;
  background-size: cover;
  width: 100%;
  flex-grow: 1;

  @media (max-width: 768px) {
    background-position: bottom center;
    background-size: contain;
    background-position-y: 100px;
  }

  @media (max-width: 480px) {
    background-position: center center;
    background-size: contain;
  }
`;

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 45px 130px;
  background-color: #f9f9f9;

  @media (max-width: 768px) {
    padding: 80px 63px 0px 63px;
  }

  @media (max-width: 480px) {
    flex-direction: column-reverse;
    align-items: center;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;
  padding-bottom: 24px;

  @media (max-width: 480px) {
    padding: 24px;
    align-items: center;
    justify-content: center;
  }
`;

// export const AskButton = styled.button`
//   padding: 12px 24px;
//   gap: 8px;
//   border-radius: 8px;
//   border: 1px solid var(--brown40);
//   background: var(--brown10);
//   display: flex;
//   color: var(--brown40);
//   font-family: Pretendard;
//   font-size: 16px;
//   font-style: normal;
//   font-weight: 400;
//   line-height: 22px;
//   cursor: pointer;

//   @media (max-width: 480px) {
//     padding: 8px 12px;
//     font-size: 14px;
//     line-height: 18px;
//   }
// `;

export const LogoImage = styled.img`
  width: 456px;
  height: 180px;

  @media (max-width: 480px) {
    width: 247px;
    height: 125px;
  }
`;

export const FormContainer = styled.div`
  padding: 32px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 16px;
  background: var(--Grayscale-10);
  width: 400px;
  height: 172px;
  gap: 16px;

  @media (max-width: 768px) {
    margin-top: 24px;
  }

  @media (max-width: 480px) {
    padding: 24px;
    width: 305px;
    height: 156px;
  }
`;

export const InputField = styled.div`
  position: relative;
  width: 100%;
`;

export const UserIcon = styled.img`
  position: absolute;
  left: 16px;
  top: 48%;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
`;

export const NameInput = styled.input`
  outline: none;
  width: 336px;
  padding: 12px 40px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  height: 46px;
  border: 1px solid var(--Grayscale-40);
  background: var(--Grayscale-10);

  @media (max-width: 480px) {
    width: 257px;
    height: 46px;
  }
`;

// export const SubmitButton = styled.button`
//   width: 336px;
//   height: 46px;
//   padding: 12px 24px;
//   justify-content: center;
//   align-items: center;
//   border-radius: 8px;
//   background: var(--brown40);
//   color: var(--Grayscale-10);
//   font-size: 16px;
//   font-style: normal;
//   font-weight: 400;
//   border: none;
//   line-height: 22px;
//   cursor: pointer;

//   @media (max-width: 480px) {
//     width: 257px;
//     height: 46px;
//   }
// `;
