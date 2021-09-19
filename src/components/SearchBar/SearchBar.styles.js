import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--darkGrey);
  height: 100px;
  padding: 0 20px;
`;

export const Content = styled.div`
  width: 100%;
  background-color: var(--mediumGrey);
  border-radius: 40px;
  height: 55px;
  position: relative;
  max-width: var(--maxWidth);

  img {
    position: absolute;
    top: 50%;
    left: 20px;
    width: 30px;
    transform: translateY(-50%);
  }

  input {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    background-color: transparent;
    padding: 0 0 0 60px;
    border: none;
    color: var(--white);
    font-size: var(--mediumFont);
    width: 85%;
    outline: none;

    @media screen and (min-width: 576px) {
      width: 95%;
      font-size: var(--largeFont);
    }
  }
`;
