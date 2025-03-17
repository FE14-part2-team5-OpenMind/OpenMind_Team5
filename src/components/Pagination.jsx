import React from "react";
import styled from "styled-components";
import ArrowRightIcon from "../assets/icons/arrow-right.svg";
import ArrowLeftIcon from "../assets/icons/arrow-left.svg";

const PaginationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PageNumber = styled.button`
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

const ArrowButton = styled.button`
  border: none;
  background: none;
  margin: 0 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const Icon = styled.img`
  width: 20px;
  height: 20px;
  opacity: 0.6;
`;

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  // 페이지네이션 범위 계산 (5개씩)
  const rangeStart = Math.floor((currentPage - 1) / 5) * 5 + 1;
  const rangeEnd = Math.min(rangeStart + 4, totalPages); // 최대 5개의 페이지 번호만 보여주기

  const handleClick = (page) => {
    if (page >= 1 && page <= totalPages && page !== currentPage) {
      onPageChange(page);
    }
  };

  return (
    <PaginationWrapper>
      <ArrowButton
        onClick={() => handleClick(currentPage - 1)}
        disabled={currentPage === 1}>
        <Icon src={ArrowLeftIcon} alt="Previous" />
      </ArrowButton>

      {Array.from({ length: rangeEnd - rangeStart + 1 }, (_, i) => (
        <PageNumber
          key={rangeStart + i}
          active={currentPage === rangeStart + i}
          onClick={() => handleClick(rangeStart + i)}>
          {rangeStart + i}
        </PageNumber>
      ))}

      <ArrowButton
        onClick={() => handleClick(currentPage + 1)}
        disabled={currentPage === totalPages}>
        <Icon src={ArrowRightIcon} alt="Next" />
      </ArrowButton>
    </PaginationWrapper>
  );
};

export default Pagination;
