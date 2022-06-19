import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --primary-color-base: #278AB0;
    --secondary-color-base: #1C4670;
    --background-color-base: #EAEAE0;
    --font-color-base: #222;
    --font-base: 'Poppins', sans-serif;
    --box-shadow-base: 0 0.5rem 1rem rgba(0, 0, 0, 0.5);
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: var(--font-base);
  }
`;

export default GlobalStyles;