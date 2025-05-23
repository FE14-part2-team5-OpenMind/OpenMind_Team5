import styled from "styled-components";

export const Background = styled.div`
  width: 100%;
  height: 100%;
  z-index: 9999;
  background-color: rgba(0, 0, 0, 0.56);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  position: fixed;
  left: 0;
  top: 0;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 612px;
  height: 454px;
  background-color: var(--gray10);
  box-shadow: var(--shadow3pt);
  border-radius: 24px;
  padding: 40px;

  @media (max-width: 480px) {
    width: 327px;
    height: 568px;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
`;
export const Message = styled.img`
  width: 28px;
  height: 28px;
  margin-right: 8px;
`;

export const Title = styled.h3`
  @media (max-width: 480px) {
    font: var(--body1-bold);
  }
`;

export const Close = styled.img`
  width: 28px;
  cursor: pointer;
  @media (max-width: 480px) {
    width: 22px;
  }
`;

export const Receiver = styled.div`
  font: var(--body3-bold);
  display: flex;
  align-items: center;
  margin-bottom: 12px;
`;

export const To = styled.span`
  font-family: Actor;
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2.4rem;
`;

export const Profile = styled.img`
  width: 28px;
  border-radius: 50%;
  margin: 2px 4px;
`;
