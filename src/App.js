import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from "./components/MovieList";
import NavBar from './components/NavBar'; 
import NowPlaying from './components/NowPlaying'; 
import Popular from './components/Popular';
import TopRated from './components/TopRated';

const App = () => {
  const [movies, setMovies] = useState([]);

  const [searchValue, setSearchValue] = useState('');

  // calling API -- searchValue as a parameter 
  const getMovieRequest = async (searchValue) => {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=7b642aed2489a8f6bfc80d04a2421e1c&language=en-US&query=${searchValue}&page=1&include_adult=false`;

    
    const response = await fetch(url); 
    const responseJson = await response.json(); 

    if (responseJson.results) {
      setMovies(responseJson.results); 
    }
  };

  // passes new searchValue to our getMovieRequest
  useEffect(() => {
    getMovieRequest(searchValue); 
  }, [searchValue]); 
	
	return (
    <>
    <div className="app-container">
      <NavBar searchValue={searchValue} setSearchValue={setSearchValue} />
    </div>

		<div className='container-fluid movie-app'>

      <div className="results row d-flex mt-4 mb-4">
        <h1>{movies.length ? `Viewing ${movies.length} results` : 'Search A Movie To View Results' }</h1>
      </div>
			

			<div className='row'>
        <MovieList 
          movies={movies} />
			</div>

      <div className="title-one">
        <h1 className="now-playing">Now Playing</h1>
      </div>

			<div className='row d-flex mt-4 mb-4'>
        <NowPlaying></NowPlaying>
      </div>

      <div className="title-one">
        <h1 className="now-playing">Popular</h1>
      </div>

			<div className='row d-flex mt-4 mb-4'>
        <Popular></Popular>
      </div>

      <div className="title-one">
        <h1 className="now-playing">Top Rated</h1>
      </div>

			<div className='row d-flex mt-4 mb-4'>
        <TopRated></TopRated>
      </div>

		</div>
    </>
	);
};

export default App;
