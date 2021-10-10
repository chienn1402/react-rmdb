import styled from 'styled-components';

type WrapperProps = {
  image: string;
};

export const Wrapper = styled.div<WrapperProps>`
  background: url(${({ image }) => image});
  background-size: cover;
  background-position: center;
  height: 600px;
  position: relative;
  animation: animateHeroImage 1s;

  @keyframes animateHeroImage {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const Content = styled.div`
  padding: 20px;
  margin: 0 auto;
  max-width: var(--maxWidth);
`;

export const Text = styled.div`
  position: absolute;
  bottom: 40px;
  margin-right: 20px;
  min-height: 100px;

  h1 {
    font-size: var(--largeFont);

    @media screen and (min-width: 576px) {
      font-size: var(--superLargeFont);
    }
  }

  p {
    font-size: var(--smallFont);

    @media screen and (min-width: 576px) {
      font-size: var(--mediumFont);
    }
  }

  @media screen and (min-width: 576px) {
    max-width: 700px;
  }
`;
