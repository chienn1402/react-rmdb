import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 0 20px;
  margin: 0 auto;
  max-width: var(--maxWidth);

  h1 {
    color: var(--mediumGrey);
    font-size: var(--mediumFont);
    margin: 20px 0 0;

    @media screen and (min-width: 576px) {
      font-size: var(--superLargeFont);
    }
  }
`;

export const Content = styled.div`
  padding: 20px 0;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 20px;
`;
