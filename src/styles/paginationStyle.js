import styled from "styled-components";

export const PaginationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PageNumber = styled.button`
  border: none;
  background: none;
  margin: 0 8px;
  font-size: 18px;
  color: ${(props) =>
    props.active ? "var(--brown40)" : "var(--Grayscale-40)"};
  cursor: pointer;

  &:hover {
    color: var(--brown40);
  }

  &:disabled {
    cursor: default;
    color: var(--Grayscale-40);
  }
`;

export const ArrowButton = styled.button`
  border: none;
  background: none;
  margin: 0 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

export const Icon = styled.img`
  width: 20px;
  height: 20px;
  opacity: 0.6;
`;
