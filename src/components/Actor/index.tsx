import React from 'react';
// styles
import { Wrapper, ActorImg } from './styles';

type Props = {
  name: string;
  character: string;
  image: string;
};

const Actor: React.FC<Props> = ({ name, character, image }) => {
  return (
    <Wrapper>
      <ActorImg src={image} alt="actor-thumb" />
      <h3>{name}</h3>
      <p>{character}</p>
    </Wrapper>
  );
};

export default Actor;
