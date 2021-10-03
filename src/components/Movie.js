import React from "react";
import { useParams } from "react-router";
// components
import Spinner from './Spinner';
import BreadCrumb from "./BreadCrumb";
// hook
import { useMovieFetch } from "../hooks/useMovieFetch";

const Movie = () => {
  const { movieId } = useParams();
  const { state: movie, loading, error } = useMovieFetch(movieId);
  
  if (loading) return <Spinner />;
  if (error) return <h1>Oops! Something went wrong ...</h1>;

  return (
    <>
      <BreadCrumb movieTitle={movie.original_title}></BreadCrumb>
    </>
  );
}

export default Movie;
