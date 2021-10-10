import styled from 'styled-components';

export const MovieThumb = styled.img`
  width: 100%;
  border-radius: 20px;
  transition: all 0.3s;
  animation: animateThumb 1s;

  &:hover {
    opacity: 0.8;
  }

  @keyframes animateThumb {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
