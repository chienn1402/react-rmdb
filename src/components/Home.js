import React from 'react';

// configs
import { IMAGE_BASE_URL, POSTER_SIZE, BACKDROP_SIZE } from '../config';

// components
import Hero from './Hero';

// hooks
import { useHomeFetch } from '../hooks/useHomeFetch';

// images
import noImage from '../images/no_image.jpg';

const Home = () => {
  const { state, loading, error } = useHomeFetch();

  return (
    <>
      {state.results[0] ? (
        <Hero
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
          title={state.results[0].original_title}
          overview={state.results[0].overview}
        />
      ) : null}
    </>
  );
};

export default Home;
