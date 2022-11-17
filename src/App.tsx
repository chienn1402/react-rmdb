import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// components
import Header from './components/Header';
import Home from './components/Home';
import Movie from './components/Movie';
import NotFound from './components/NotFound';
// styles
import { GlobalStyle } from './GlobalStyle';

const App: React.FC = () => {
  console.log((window as any).Selenium);
  console.log(localStorage.getItem('auth0Selenium_dev'));

  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:movieId' element={<Movie />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
      <GlobalStyle />
    </Router>
  );
};

export default App;
