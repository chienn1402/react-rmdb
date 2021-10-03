import React from 'react';
import PropTypes from 'prop-types';
// styles
import { Wrapper, ActorImg } from './Actor.styles';

const Actor = ({ name, character, image }) => {
  return (
    <Wrapper>
      <ActorImg src={image} alt="actor-thumb" />
      <h3>{name}</h3>
      <p>{character}</p>
    </Wrapper>
  );
};

Actor.propTypes = {
  name: PropTypes.string,
  character: PropTypes.string,
  image: PropTypes.string,
};

export default Actor;
