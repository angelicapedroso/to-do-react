import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --color-one: #0a0c0d;
    --color-two: #213635;
    --color-three: #1c5052;
    --color-four: #348e91;
    --color-five: #f2f2f2;
    --font-base: 'Poppins', sans-serif;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: var(--font-base);
  }
`;

export default GlobalStyles;
