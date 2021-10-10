import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: var(--darkGrey);
  padding: 0 20px;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: var(--maxWidth);
  padding: 20px 0;
  margin: 0 auto;
`;

export const RMDBLogo = styled.img`
  width: 150px;

  @media screen and (min-width: 576px) {
    width: 200px;
  }
`;

export const TMDBLogo = styled.img`
  width: 80px;

  @media screen and (min-width: 576px) {
    width: 100px;
  }
`;
