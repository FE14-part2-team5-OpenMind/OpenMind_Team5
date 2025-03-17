import React, { useState } from "react";
import styled from "styled-components";

import ProfileCardItem from "./ProfilecardItem";
import Pagination from "./Pagination";

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 45px;
  width: 940px;
  margin: 0 auto;
`;

const ProfileCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
`;

function ProfileCard({ profiles }) {
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 상태

  // 프로필 데이터를 8개씩 나누는 함수
  const groupProfiles = (profilesArray, groupSize) => {
    const grouped = [];
    for (let i = 0; i < profilesArray.length; i += groupSize) {
      grouped.push(profilesArray.slice(i, i + groupSize));
    }
    return grouped;
  };

  const groupedProfiles = groupProfiles(profiles?.results || [], 8);
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
