import React from "react";
// styles
import { Wrapper, ActorImg } from './Actor.styles';

const Actor = ({name, character, image}) => {
  return (
    <Wrapper>
      <ActorImg src={image} alt="actor-thumb" />
      <h3>{name}</h3>
      <p>{character}</p>
    </Wrapper>
  )
}

export default Actor;