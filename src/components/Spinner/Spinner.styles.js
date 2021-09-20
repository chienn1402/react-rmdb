import styled from "styled-components";

export const Spinner = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 5px solid var(--lightGrey);
  border-top: 5px solid var(--darkGrey);
  animation: spinner 0.8s linear infinite;
  margin: 0 auto 20px;

  @keyframes spinner {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
