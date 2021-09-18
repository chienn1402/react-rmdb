import React from 'react';

import RMDBLogoImg from '../../images/react-movie-logo.svg';
import TMDBLogoImg from '../../images/tmdb_logo.svg';

import { Wrapper, Content, RMDBLogo, TMDBLogo } from './Header.styles';

const Header = () => (
  <Wrapper>
    <Content>
      <RMDBLogo src={RMDBLogoImg} alt="rmdb-logo" />
      <TMDBLogo src={TMDBLogoImg} alt="tmdb-logo" />
    </Content>
  </Wrapper>
);

export default Header;
