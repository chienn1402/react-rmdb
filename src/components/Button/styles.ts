import styled from 'styled-components';

export const Wrapper = styled.button`
  display: block;
  min-width: 250px;
  height: 60px;
  margin: 0 auto 20px;
  background-color: var(--darkGrey);
  color: var(--white);
  font-size: var(--largeFont);
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.3s;
  border-radius: 30px;

  &:hover {
    opacity: 0.8;
  }
`;
