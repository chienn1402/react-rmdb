import React from 'react';

// styles
import { MovieThumb } from './Thumb.styles';

export const Thumb = ({ movieId, image, clickable }) => (
  <MovieThumb src={image} alt="movie-thumb" />
);

export default Thumb;
