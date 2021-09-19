import React from 'react';

import { Link } from 'react-router-dom';

import RMDBLogoImg from '../../images/react-movie-logo.svg';
import TMDBLogoImg from '../../images/tmdb_logo.svg';

import { Wrapper, Content, RMDBLogo, TMDBLogo } from './Header.styles';

const Header = () => (
  <Wrapper>
    <Content>
      <Link to="/">
        <RMDBLogo src={RMDBLogoImg} alt="rmdb-logo" />
      </Link>
      <TMDBLogo src={TMDBLogoImg} alt="tmdb-logo" />
    </Content>
  </Wrapper>
);

export default Header;
