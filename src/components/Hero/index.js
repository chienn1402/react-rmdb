import React from 'react';
// styles
import { Wrapper, Content, Text } from './Hero.styles';

const Hero = ({ image, title, overview }) => {
  return (
    <Wrapper image={image}>
      <Content>
        <Text>
          <h1>{title}</h1>
          <p>{overview}</p>
        </Text>
      </Content>
    </Wrapper>
  );
};

export default Hero;
