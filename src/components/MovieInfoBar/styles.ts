import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: var(--darkGrey);
  color: var(--white);
  padding: 20px;
`;

export const Content = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }

  .column {
    background-color: var(--mediumGrey);
    border-radius: 15px;
    width: 100%;
    font-size: var(--mediumFont);
    padding: 20px;
    text-align: center;
    margin-bottom: 20px;

    @media screen and (min-width: 768px) {
      margin-bottom: 0;
      margin-right: 40px;

      :last-child {
        margin-right: 0;
      }
    }
  }
`;
