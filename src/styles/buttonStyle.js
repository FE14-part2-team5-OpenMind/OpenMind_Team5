import styled from 'styled-components';

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: none;
  font-family: Pretendard;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;

  ${(props) =>
    props.variant === 'ask' &&
    `
    padding: 12px 24px;
    gap: 8px;
    border-radius: 8px;
    background: var(--brown10);
    color: var(--brown40);
    border: 1px solid var(--brown40);
    font-size: 16px;

    @media (max-width: 480px) {
      padding: 8px 12px;
      font-size: 14px;
      line-height: 18px;
    }
  `}

  ${(props) =>
    props.variant === 'submit' &&
    `
    width: 336px;
    height: 46px;
    padding: 12px 24px;
    border-radius: 8px;
    background: var(--brown40);
    color: var(--Grayscale-10);
    font-size: 16px;
    border: none;

    @media (max-width: 480px) {
      width: 257px;
      height: 46px;
    }
  `}
`;
