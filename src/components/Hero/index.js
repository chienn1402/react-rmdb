import React from 'react';
import PropTypes from 'prop-types';
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

Hero.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  overview: PropTypes.string,
};

export default Hero;
