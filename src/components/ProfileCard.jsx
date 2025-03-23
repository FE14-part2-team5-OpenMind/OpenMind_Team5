import React, { useState, useEffect } from "react";
import {
  ProfileContainer,
  ProfileCardContainer,
} from "../styles/profileCardStyle";

import ProfileCardItem from "./ProfileCardItem";
import Pagination from "./Pagination";

function ProfileCard({ profiles }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage, setCardsPerPage] = useState(8);

  // 화면 크기에 따라 페이지당 카드 수를 동적으로 조정
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 865) {
        setCardsPerPage(6);
      } else {
        setCardsPerPage(8);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // 페이지 변경 함수
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // 프로필 데이터를 `cardsPerPage`만큼 나누는 함수
  const groupProfiles = (profilesArray, groupSize) => {
    const grouped = [];
    for (let i = 0; i < profilesArray.length; i += groupSize) {
      grouped.push(profilesArray.slice(i, i + groupSize));
    }
    return grouped;
  };

  const groupedProfiles = groupProfiles(profiles?.results || [], cardsPerPage);
  const totalPages = groupedProfiles.length;

  return (
    <>
      <ProfileContainer>
        {groupedProfiles[currentPage - 1]?.length > 0 && (
          <ProfileCardContainer>
            {groupedProfiles[currentPage - 1].map((profile) => (
              <ProfileCardItem key={profile.id} profile={profile} />
            ))}
          </ProfileCardContainer>
        )}
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
