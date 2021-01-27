import React, { useState, useEffect } from 'react';
import Moment from 'react-moment'; 

const ComingSoon = () => {

    const [movies, setMovies] = useState([]);


    const getMovieRequest = async () => { 
        const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=7b642aed2489a8f6bfc80d04a2421e1c&language=en-US&page=1`;

        const response = await fetch(url); 
        const responseJson = await response.json(); 
        setMovies(responseJson.results);
    };

    useEffect(() => {
        getMovieRequest();
    }, []); 



	return (
		<>
                {movies && movies.map((movie => ( 
                    <div className="movie-container" key={movie.id}>
                    
                    <div className='image-container d-flex justify-content-start m-3'>
                        <img src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`} alt='movie'></img> 
                    </div>

                    <div className="movie-info">
                        <center><p className="movie-title font-weight-bold">{movie.title}</p></center>
                        <p><span className="movie-date font-weight-bold">Release Date:</span> <Moment format="MMMM D, YYYY">{movie.release_date}</Moment></p>
                        <p><span className="movie-rating font-weight-bold">Rating:</span> {movie.vote_average}</p>
                        <p><span className="movie-overview font-weight-bold">Overview:</span><br></br>
                            {movie.overview}
                        </p>
                    </div>

                </div> 
             )))}


          
		</>
	);
};

export default ComingSoon;