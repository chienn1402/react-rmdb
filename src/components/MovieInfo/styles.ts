import styled from 'styled-components';
import { IMAGE_BASE_URL, BACKDROP_SIZE } from '../../config';

type WrapperProps = {
  backdrop: string;
}

export const Wrapper = styled.div<WrapperProps>`
  background: ${({ backdrop }) =>
    backdrop ? `url(${IMAGE_BASE_URL}${BACKDROP_SIZE}${backdrop})` : '#000'};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  padding: 40px 20px;
  animation: animateMovieInfo 1s;

  @keyframes animateMovieInfo {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: var(--maxWidth);
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 20px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const Text = styled.div`
  padding: 20px 40px;
  color: var(--white);

  @media screen and (min-width: 768px) {
    flex-basis: 70%;
  }

  .rating-directors {
    display: flex;

    .score {
      background-color: var(--white);
      width: 45px;
      height: 45px;
      border-radius: 50%;
      color: var(--black);
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: 600;
      font-size: var(--mediumFont);
    }

    .directors {
      margin-left: 20px;

      p {
        margin: 0;
      }
    }
  }
`;
