import React, { useState, useEffect } from "react";
import {
  ProfileContainer,
  ProfileCardContainer,
} from "../styles/profileCardStyle";

import ProfileCardItem from "./ProfilecardItem";
import Pagination from "./Pagination";

function ProfileCard({ profiles }) {
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 상태
  const [cardsPerPage, setCardsPerPage] = useState(8); // 기본적으로 8개 카드 표시

  // 화면 크기에 따라 페이지당 카드 수를 동적으로 조정
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 865) {
        setCardsPerPage(6); // 화면 너비가 865px 이하일 경우 6개 카드로 변경
      } else {
        setCardsPerPage(8); // 기본적으로 8개 카드 표시
      }
    };

    handleResize(); // 초기 로드 시 체크
    window.addEventListener("resize", handleResize); // 리사이즈 시 카드 수 업데이트

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // 프로필 데이터를 `cardsPerPage`만큼 나누는 함수
  const groupProfiles = (profilesArray, groupSize) => {
    const grouped = [];
    for (let i = 0; i < profilesArray.length; i += groupSize) {
      grouped.push(profilesArray.slice(i, i + groupSize));
    }
    return grouped;
  };

  const groupedProfiles = groupProfiles(profiles?.results || [], cardsPerPage); // 페이지당 카드 수에 맞게 그룹화
  const totalPages = groupedProfiles.length; // 총 페이지 수

  // 페이지 변경 함수
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <ProfileContainer>
        {/* 현재 페이지에 해당하는 프로필 그룹만 표시 */}
        {groupedProfiles[currentPage - 1]?.length > 0 && (
          <ProfileCardContainer>
            {groupedProfiles[currentPage - 1].map((profile) => (
              <ProfileCardItem key={profile.id} profile={profile} />
            ))}
          </ProfileCardContainer>
        )}
        {/* 페이지네이션 추가 */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </ProfileContainer>
    </>
  );
}

export default ProfileCard;
