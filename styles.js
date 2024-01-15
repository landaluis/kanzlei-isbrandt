import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    height: 1500px;
    font-family: Metropolis-Regular;
  }

  @font-face {
    font-family: 'Metropolis-Regular';
    src: url('/Metropolis-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }
`;
