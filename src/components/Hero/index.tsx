import React from 'react';
// styles
import { Wrapper, Content, Text } from './styles';

type Props = {
  image: string;
  title: string;
  overview: string;
};

const Hero: React.FC<Props> = ({ image, title, overview }) => {
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
