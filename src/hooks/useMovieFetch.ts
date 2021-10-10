import { useState, useEffect } from 'react';
// configs
import API, { Movie } from '../api';
// helpers
import { isPersistedState } from '../helpers';

export const useMovieFetch = (movieId: number) => {
  const [state, setState] = useState({} as Movie);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setLoading(true);
        setError(false);

        const movie = await API.fetchMovie(movieId);
        const credits = await API.fetchCredits(movieId);
        const directors = credits.crew.filter(
          (member) => member.job === 'Director'
        );

        setState({
          ...movie,
          actors: credits.cast,
          directors,
        });
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    const sessionSate = isPersistedState(String(movieId));
    if (sessionSate) {
      setState(sessionSate);
      setLoading(false);
      return;
    }

    fetchMovie();
  }, [movieId]);

  // Write to sessionStorage
  useEffect(() => {
    sessionStorage.setItem(String(movieId), JSON.stringify(state));
  }, [movieId, state]);

  return { state, loading, error };
};
