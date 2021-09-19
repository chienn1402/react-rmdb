import React, { useEffect, useRef, useState } from 'react';

// images
import SearchIcon from '../../images/search-icon.svg';

// styles
import { Wrapper, Content } from './SearchBar.styles';

const SearchBar = ({ setSearchTerm }) => {
  const [state, setState] = useState('');
  const initial = useRef(true);

  useEffect(() => {
    if (initial.current) {
      initial.current = false;
      return;
    }

    const timer = setTimeout(() => {
      setSearchTerm(state);
    }, 500);

    return () => clearTimeout(timer);
  }, [setSearchTerm, state]);

  return (
    <Wrapper>
      <Content>
        <img src={SearchIcon} alt="search-icon" />
        <input
          type="text"
          placeholder="Search movie"
          onChange={(event) => setState(event.currentTarget.value)}
          value={state}
        />
      </Content>
    </Wrapper>
  );
};

export default SearchBar;
