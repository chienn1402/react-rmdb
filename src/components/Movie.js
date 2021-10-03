import React from 'react';
import { useParams } from 'react-router';
// components
import Spinner from './Spinner';
import BreadCrumb from './BreadCrumb';
import MovieInfo from './MovieInfo';
// hook
import { useMovieFetch } from '../hooks/useMovieFetch';

const Movie = () => {
  const { movieId } = useParams();
  const { state: movie, loading, error } = useMovieFetch(movieId);

  if (loading) return <Spinner />;
  if (error) return <h1>Oops! Something went wrong ...</h1>;

  console.log(movie);
  return (
    <>
      <BreadCrumb movieTitle={movie.original_title} />
      <MovieInfo movie={movie} />
    </>
  );
};

export default Movie;
