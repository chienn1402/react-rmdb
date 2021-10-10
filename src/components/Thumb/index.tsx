import React from 'react';
import { Link } from 'react-router-dom';
// styles
import { MovieThumb } from './styles';

type Props = {
  movieId?: number;
  image: string;
  clickable: boolean;
};

const Thumb: React.FC<Props> = ({ movieId, image, clickable }) => (
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
