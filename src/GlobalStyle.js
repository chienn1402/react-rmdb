import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --max-width: 1280px;
    --white: #ffffff;
    --black: #000000;
    --lightGrey: #eeeeee;
    --mediumGrey: #353535;
    --darkGrey: #1e1e1e;
    --superLargeFont: 2.5rem;
    --largeFont: 1.5rem;
    --mediumFont: 1.2rem;
    --smallFont: 1rem;
  }

  * {
    box-sizing: border-box;
    font-family: 'Abel', sans-serif;
  }

  body {
    margin: 0;
    padding: 0;

    h1 {
      font-size: 2rem;
      font-weight: 600;
      color: var(--white);
    }

    p {
      font-size: 1.1rem;
      color: var(---white);
    }
  }
`;

