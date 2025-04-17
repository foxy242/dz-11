import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Segoe UI', sans-serif;
    background-color: #f5f5f5;
    color: #333;
  }

  input, button {
    font-family: inherit;
  }
`;