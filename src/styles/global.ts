import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root{
    --gray: #2C2E33;
    --blue: #14213d;
    --orange: #FCA311;
    --white-ice: #e5e5e5; 
    --white: #FFFFFF;
    --background: #14161C;
    --green: #27AE60;
    --red: #F42E2E;
    --font-default:  'Roboto', monospace;
  }
  body, div, ul, button, h1, p, img, h2, h3, nav, a {
    margin: 0;
    padding: 0;
    font-family: var(--font-default);
    list-style-type: none;
    box-sizing: border-box;
    text-decoration: none;
    background: var(---background);
  }

  input, select {
    outline: none;
  }

  #root {
    height: 100%;
  }
`;

export default GlobalStyle;