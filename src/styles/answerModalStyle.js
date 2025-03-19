import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContainer = styled.div`
  display: flex;
  gap: 40px;
  flex-direction: column;
  justify-content: center;
  width: 450px;
  height: 280px;
  background: white;
  border-radius: 10px;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  font-size: 15px;
  align-items: center;
  justify-content: center;
  max-height: 150px;
  overflow-y: auto;

  > div a {
    color: black;
    display: inline;
    text-decoration: none;
  }

  > div a:hover {
    color: var(--blue50);
  }
`;

export const CloseButton = styled.button`
  width: 50px;
  height: 30px;
  margin: 0 auto;
  background: var(--blue50);
  color: var(--gray10);
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
