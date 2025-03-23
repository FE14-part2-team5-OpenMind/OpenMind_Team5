import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;

  @media (max-width: 768px) {
    padding: 16px;
  }
`;

export const Header = styled.nav`
  width: 80%;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 20px 0;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    gap: clamp(8px, 2vw, 16px);
  }
`;

export const Logo = styled(Link)`
  display: block;
  width: 146px;
  height: 57px;

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 600px) {
    width: min(146px, 30vw);
    height: auto;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 25px auto;

  @media (max-width: 600px) {
    flex-direction: row;
    justify-content: space-between;
    width: 370px;
  }
`;

export const Title = styled.h1`
  font-size: 40px;
  font-weight: 400;
  margin-bottom: 25px;

  @media (max-width: 600px) {
    font-size: 24px;
    margin-bottom: 0;
  }
`;

export const SortDropdown = styled.div`
  position: relative;
  display: inline-block;
  cursor: pointer;
`;

export const SortButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  width: 89px;
  height: 34px;
  background: white;
  border: ${({ active }) =>
    active ? "1px solid var(--gray60)" : "1px solid var(--Grayscale-40)"};
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  color: ${({ active }) => (active ? "var(--gray60)" : "var(--Grayscale-40)")};

  > img {
    width: 18px;
    height: 16px;
    filter: ${({ active }) => (active ? "none" : "grayscale(100%)")};
    opacity: ${({ active }) => (active ? "1" : "0.6")};
  }

  @media (max-width: 600px) {
    width: 80px;
    height: 30px;
    font-size: 12px;
  }
`;

export const DropdownMenu = styled.ul`
  position: absolute;
  top: 40px;
  left: 0;
  width: 89px;
  background: white;
  border: 1px solid var(--gray30);
  border-radius: 8px;
  box-shadow: var(--shadow1pt);
  list-style: none;
  padding: 5px 0;
  z-index: 1000;

  @media (max-width: 600px) {
    width: 80px;
  }
`;

export const DropdownItem = styled.li`
  padding: 10px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  text-align: center;
  color: ${({ selected }) => (selected ? "var(--blue50)" : "var(--gray60)")};

  &:hover {
    background: #f0f0f0;
  }

  @media (max-width: 600px) {
    font-size: 12px;
    padding: 8px;
  }
`;
