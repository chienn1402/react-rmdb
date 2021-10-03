import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
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

Thumb.propTypes = {
  movieId: PropTypes.number,
  image: PropTypes.string,
  clickable: PropTypes.bool,
};

export default Thumb;
