import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--darkGrey);
  padding: 0 20px;
`;

export const Content = styled.div`
  width: 100%;
  max-width: var(--maxWidth);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 20px 0;

  span {
    color: var(--white);
    font-size: var(--mediumFont);

    @media screen and (min-width: 576px) {
      font-size: var(--largeFont);
    }
  }
`;
