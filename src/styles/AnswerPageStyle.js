import styled, { keyframes } from "styled-components";

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const RotatingAnimation = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 20px;
  height: 20px;
  border: 2px solid #ccc;
  border-top-color: gray;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;

export const DeleteButton = styled.button`
  position: absolute;
  top: 380px;
  right: calc(
    50% - 716px / 2 + 2px
  ); /* 수정: PC에서 오른쪽으로 2px 이동 (4px → 2px) */
  padding: 12px 24px;
  background: var(--brown40);
  color: white;
  border: none;
  border-radius: 24px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background: var(--brown50);
  }

  @media (max-width: 767px) {
    right: calc(
      50% - 327px / 2 - 2px
    ); /* 수정: 모바일에서 왼쪽으로 2px 이동 (-4px → -2px) */
  }
`;

export const Toast = styled.div`
  position: fixed;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 999;
  padding: 12px 20px;
  background: #757575;
  color: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
`;
