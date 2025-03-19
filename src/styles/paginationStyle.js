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
    props.active
      ? "var(--brown40)" // active 상태일 때 색상
      : "var(--Grayscale-40)"}; // 비활성화 상태일 때 색상
  cursor: pointer;

  &:hover {
    color: var(--brown40); // hover 시 색상
  }

  &:disabled {
    cursor: default;
    color: var(--Grayscale-40); // disabled 상태일 때 색상
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
