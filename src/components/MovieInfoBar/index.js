import React from "react";
// helpers
import { calcTime, convertMoney } from "../../helpers";
// styles
import { Wrapper, Content } from './MovieInfoBar.styles';

const MovieInfoBar = ({ runtime, budget, revenue }) => {
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