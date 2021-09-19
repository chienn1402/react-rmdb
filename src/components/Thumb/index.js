import React from 'react';

import { Link } from 'react-router-dom';

// styles
import { MovieThumb } from './Thumb.styles';

export const Thumb = ({ movieId, image, clickable }) => (
  <div>
    {clickable ? (
      <Link to={`/${movieId}`}>
        <MovieThumb src={image} alt="movie-thumb" />
      </Link>
    ) : (
      <MovieThumb src={image} alt="movie-thumb" />
    )}
  </div>
);

export default Thumb;
