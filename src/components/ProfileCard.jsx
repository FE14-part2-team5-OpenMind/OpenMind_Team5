import React from "react";
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
  // 프로필 데이터를 8개씩 나누는 함수
  const groupProfiles = (profilesArray, groupSize) => {
    const grouped = [];
    for (let i = 0; i < profilesArray.length; i += groupSize) {
      grouped.push(profilesArray.slice(i, i + groupSize));
    }
    return grouped;
  };

  const groupedProfiles = groupProfiles(profiles?.results || [], 8);

  return (
    <>
      <ProfileContainer>
        {groupedProfiles.map((group, index) => (
          <ProfileCardContainer key={index}>
            {group.map((profile) => (
              <ProfileCardItem key={profile.id} profile={profile} />
            ))}
          </ProfileCardContainer>
        ))}
      </ProfileContainer>
      <Pagination />
    </>
  );
}

export default ProfileCard;
