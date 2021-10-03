import React from 'react';
import { useParams } from 'react-router';
// configs
import { IMAGE_BASE_URL, POSTER_SIZE } from '../config';
// components
import Spinner from './Spinner';
import BreadCrumb from './BreadCrumb';
import MovieInfo from './MovieInfo';
import MovieInfoBar from './MovieInfoBar';
import Actor from './Actor';
import Grid from './Grid';
// hook
import { useMovieFetch } from '../hooks/useMovieFetch';
// images
import noImage from '../images/no_image.jpg';

const Movie = () => {
  const { movieId } = useParams();
  const { state: movie, loading, error } = useMovieFetch(movieId);

  if (loading) return <Spinner />;
  if (error) return <h1>Oops! Something went wrong ...</h1>;

  return (
    <>
      <BreadCrumb movieTitle={movie.original_title} />
      <MovieInfo movie={movie} />
      <MovieInfoBar
        runtime={movie.runtime}
        budget={movie.budget}
        revenue={movie.revenue}
      />
      <Grid header="Actors">
        {movie.actors.map((actor) => (
          <Actor
            key={actor.credit_id}
            name={actor.name}
            character={actor.character}
            image={
              actor.profile_path
                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
                : noImage
            }
          />
        ))}
      </Grid>
    </>
  );
};

export default Movie;
