import React from 'react';
// styles
import { Wrapper } from './styles';

type Props = {
  text: string;
  callback: () => void;
};

const Button: React.FC<Props> = ({ text, callback }) => (
  <Wrapper type="button" onClick={callback}>
    {text}
  </Wrapper>
);

export default Button;
