import React from 'react';
// helpers
import { calcTime, convertMoney } from '../../helpers';
// styles
import { Wrapper, Content } from './styles';

type Props = {
  runtime: number;
  budget: number;
  revenue: number;
};

const MovieInfoBar: React.FC<Props> = ({ runtime, budget, revenue }) => {
  return (
    <Wrapper>
      <Content>
        <div className="column">Running Time: {calcTime(runtime)}</div>
        <div className="column">Budget: {convertMoney(budget)}</div>
        <div className="column">Revenue: {convertMoney(revenue)}</div>
      </Content>
    </Wrapper>
  );
};

export default MovieInfoBar;
