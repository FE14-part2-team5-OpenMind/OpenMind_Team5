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

      {Array.from({ length: totalPages }, (_, i) => (
        <PageNumber
          key={i + 1}
          active={currentPage === i + 1}
          onClick={() => handleClick(i + 1)}>
          1{i + 1}
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
