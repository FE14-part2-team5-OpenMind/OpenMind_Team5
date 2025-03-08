import { createGlobalStyle } from "styled-components";
import "../../assets/font/actor/Actor.css";
import "../../assets/font/pretendard/pretendard.css";

const GlobalStyle = createGlobalStyle`
  :root{
    // Color
    --gray10: #FFFFFF;
    --gray20: #F9F9F9;
    --gray30: #CFCFCF;
    --gray40: #818181;
    --gray50: #515151;
    --gray60: #000000;

    --brown10: #F5F1EE; 
    --brown20: #E4D5C9; 
    --brown30: #C7BBB5; 
    --brown40: #542F1A; 
    --brown50: #341909; 

    --blue50: #1877F2;
    --yellow50: #FEE500;
    --red50: #B93333;

    // shadow
    --shadow1pt: 0px 4px 4px 0px #8C8C8C40;
    --shadow2pt: 0px 4px 4px 0px #00000040;
    --shadow3pt: 0px 16px 20px 0px #3030309E;

    // font
    font-size: 62.5%;

    --body1-regular: 400 2rem 'Pretendard';
    --body2-regular: 400 1.8rem 'Pretendard';
    --body3-regular: 400 1.6rem 'Pretendard';

    --body1-bold: 400 2rem 'Pretendard';
    --body2-bold: 400 1.8rem 'Actor';
    --body3-bold: 400 1.6rem 'Pretendard';
    
    --caption1-regular: 400 1.4rem 'Pretendard';
    --caption1-medium: 500 1.4rem 'Pretendard';
    --caption1-bold: 400 1.4rem 'Actor';

  }

  html, body {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
  } 

  h1, h2, h3 {
    font-family: 'Pretendard';
    font-weight: 400;
  }

  h1 {
      font-size: 4rem;
  }

  h2 {
      font-size: 3.2rem;
  }

  h3 {
      font-size: 2.4rem;
  }
    
    
  /* 폼 요소들 기본 font-family제거 -> 상속받게 설정 */
  input,
  textarea,
  select,
  button {
    font-family: inherit;
  }



`;

export default GlobalStyle;
