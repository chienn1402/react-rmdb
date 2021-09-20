import React from 'react';
import { Link } from 'react-router-dom';
// styles
import { Wrapper, Content, RMDBLogo, TMDBLogo } from './Header.styles';
// images
import RMDBLogoImg from '../../images/react-movie-logo.svg';
import TMDBLogoImg from '../../images/tmdb_logo.svg';

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
