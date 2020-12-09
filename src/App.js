import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from "./components/MovieList";
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/SearchBox';
import AddFavorites from './components/AddFavorites';
import RemoveFavorites from './components/RemoveFavorites'; 

const App = () => {
  const [movies, setMovies] = useState([]);
  // new state to hold favorites -- adding ser clicks to this array 
  const [favorites, setFavorites] = useState([]); 
  const [searchValue, setSearchValue] = useState('');
  // calling API -- searchValue as a parameter 
  const getMovieRequest = async (searchValue) => {
    // const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=50241c2`; // original
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

  // retrieving favorites from localStorage when app loads and setting to state 
  useEffect(() => {
    const movieFavorites = JSON.parse(
      localStorage.getItem('react-movie-app-favorites')
    ); 
    setFavorites(movieFavorites); 
  }, []); 

  // saving to localStorage to remain when page loads 
  const saveToLocalStorage = (items) => {
    localStorage.setItem('react-movie-app-favorites', JSON.stringify(items));
  };

  // accepts a movie, takes in the current favorites array, copies it, and adds the new movie and saves back into state 
  const addFavoriteMovie = (movie) => {
    const newFavoriteList = [...favorites, movie]; 
    setFavorites(newFavoriteList);
    saveToLocalStorage(newFavoriteList); 
  };

  // remove a given movie from favorite state by filtering ID returning new favorites array
  const removeFavoriteMovie = (movie) => {
    const newFavoriteList = favorites.filter(
      (favorite) => favorite.id !== movie.id
    ); 
    setFavorites(newFavoriteList); 
    saveToLocalStorage(newFavoriteList); 
  };
	
	return (
    <>
    <div className="app-container">
      <h1 className="app-title">Movie Search</h1>
    </div>
		<div className='container movie-app'>
			<div className='row d-flex align-items-center mt-4 mb-4'>
				{/* <MovieListHeading heading='Movies' /> */}
				<SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
			</div>
			<div className='row'>
        <MovieList 
          movies={movies} 
          favoriteComponent={AddFavorites} 
          handleFavoritesClick={addFavoriteMovie}/>
			</div>
      <div className='row d-flex align-items-center mt-4 mb-4'>
				<MovieListHeading heading='Watch List' />
			</div>
			<div className='row'>
        <MovieList 
          movies={favorites} 
          handleFavoritesClick={removeFavoriteMovie}
          favoriteComponent={RemoveFavorites} /> 
			</div>
		</div>
    </>
	);
};

export default App;
