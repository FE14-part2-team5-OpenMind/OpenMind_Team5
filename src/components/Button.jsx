import React from 'react';
import { StyledButton } from '../styles/buttonStyle';

function Button({ children, variant, icon, ...props }) {
  return (
    <StyledButton variant={variant} {...props}>
      {children}
      {icon && <img src={icon} alt="버튼 아이콘" />}
    </StyledButton>
  );
}

export default Button;
