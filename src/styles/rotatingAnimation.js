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
