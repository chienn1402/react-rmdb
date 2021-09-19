import { useEffect, useState } from "react";

import API from '../api';

const initialState = {
  page: 0,
  results: [],
  total_pages: 0,
  total_results: 0
};

export const useHomeFetch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [state, setState] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchMovies = async (page, searchTerm = '') => {
    try {
      setLoading(true);
      setError(false);

      const movies = await API.fetchMovies(searchTerm, page);
      setState(prev => ({
        ...movies,
        results:
          page > 1 ? [...prev.results, ...movies.results] : [...movies.results],
      }));
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };
  
  useEffect(() => {
    setState(initialState);
    fetchMovies(1, searchTerm);
  }, [searchTerm]);

  return { state, loading, error, searchTerm, setSearchTerm };
};