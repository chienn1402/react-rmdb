import React from 'react';
// configs
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../config';
import { Movie } from '../../api';
// styles
import { Wrapper, Content, Text } from './styles';
// components
import Thumb from '../Thumb';
// images
import noImage from '../../images/no_image.jpg';

type Props = {
  movie: Movie;
};

const MovieInfo: React.FC<Props> = ({ movie }) => {
  return (
    <Wrapper backdrop={movie.backdrop_path}>
      <Content>
        <Thumb
          image={
            movie.poster_path
              ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
              : noImage
          }
          clickable={false}
        />

        <Text>
          <h1>{movie.title}</h1>
          <p>{movie.overview}</p>
          <div className="rating-directors">
            <div className="rating">
              <h3>RATING</h3>
              <div className="score">{movie.vote_average}</div>
            </div>
            <div className="directors">
              <h3>DIRECTOR{movie.directors.length > 1 ? 'S' : ''}</h3>
              {movie.directors.map((director) => (
                <p>{director.name}</p>
              ))}
            </div>
          </div>
        </Text>
      </Content>
    </Wrapper>
  );
};

export default MovieInfo;
