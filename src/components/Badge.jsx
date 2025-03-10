import React from "react";
import styled from "styled-components";

// Styles
const Finished = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 76px;
  height: 26px;
  border-radius: 8px;
  border: 1px solid var(--brown40);
  color: var(--brown40);
  font: var(--caption1-medium);
  padding: 4px auto;
`;
const NotFinished = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 61px;
  height: 26px;
  border-radius: 8px;
  border: 1px solid var(--gray40);
  color: var(--gray40);
  font: var(--caption1-medium);
  padding: 4px auto;
`;

// Display
const Badge = ({ finished }) => {
  return finished ? (
    <Finished>답변 완료</Finished>
  ) : (
    <NotFinished>미답변</NotFinished>
  );
};

export default Badge;
