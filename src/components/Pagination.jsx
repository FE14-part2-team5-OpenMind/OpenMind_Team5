import React from "react";
import {
  PaginationWrapper,
  PageNumber,
  ArrowButton,
  Icon,
} from "../styles/paginationStyle";

import ArrowRightIcon from "../assets/icons/Arrow-right.svg";
import ArrowLeftIcon from "../assets/icons/Arrow-left.svg";

// 상수 정의
const PAGE_GROUP_SIZE = 5;
const FIRST_PAGE = 1;
const MAX_PAGE_DISPLAY = 5;

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  // 페이지네이션 범위 계산 (5개씩)
  const rangeStart =
    Math.floor((currentPage - FIRST_PAGE) / PAGE_GROUP_SIZE) * PAGE_GROUP_SIZE +
    FIRST_PAGE;

  // 페이지 번호 목록
  const pageNumbers = Array.from(
    { length: MAX_PAGE_DISPLAY },
    (_, i) => rangeStart + i
  ).filter((page) => page <= totalPages);

  // 페이지네이션 함수
  const handleClick = (page) => {
    if (page >= FIRST_PAGE && page <= totalPages && page !== currentPage) {
      onPageChange(page);
    }
  };

  return (
    <PaginationWrapper>
      <ArrowButton
        onClick={() => handleClick(currentPage - FIRST_PAGE)}
        disabled={currentPage === FIRST_PAGE}
      >
        <Icon src={ArrowLeftIcon} alt="Previous" />
      </ArrowButton>

      {pageNumbers.map((page) => (
        <PageNumber
          key={page}
          active={currentPage === page}
          onClick={() => handleClick(page)}
        >
          {page}
        </PageNumber>
      ))}

      <ArrowButton
        onClick={() => handleClick(currentPage + FIRST_PAGE)}
        disabled={currentPage === totalPages}
      >
        <Icon src={ArrowRightIcon} alt="Next" />
      </ArrowButton>
    </PaginationWrapper>
  );
};

export default Pagination;
