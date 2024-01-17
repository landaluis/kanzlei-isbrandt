import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    font-family: Ruluko-Regular;
    background-color: #f8f8f8;
  }

  @font-face {
    font-family: 'Ruluko-Regular';
    src: url('/Ruluko-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }
`;
