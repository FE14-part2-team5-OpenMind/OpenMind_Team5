import styled from "styled-components";

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 45px;
  max-width: 1200px;
  width: 90%;
  margin: 0 auto;
`;

export const ProfileCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(186px, 220px));
  gap: 2rem;
  justify-content: center;

  @media screen and (max-width: 865px) {
    grid-template-columns: repeat(3, minmax(186px, 220px));
  }
  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(2, minmax(155px, 220px));
    gap: 1.6rem;
  }
`;
