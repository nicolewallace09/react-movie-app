import React from 'react';

const MovieList = (props) => {
    const FavoriteComponent = props.favoriteComponent;
	return (
		<>
			{props.movies.filter(movie => movie.title).map((movie, index) => (
                <div className="movie-container">
			
                    <div className='image-container d-flex justify-content-start m-3'>
                        <img src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`} alt='movie' className="align-self-center"></img>
                        <div 
                            // adding function from props and adding onClick property
                            onClick={() => props.handleFavoritesClick(movie)}
                            className='overlay d-flex align-items-center justify-content-center'>
                            <FavoriteComponent/>
                        </div>
                    </div>

                    <div className="movie-info">
                        <p>{movie.title}</p>
                        <p>Release Date:{movie.release_date}</p>
                        <p>Rating: {movie.vote_average}</p>
                        <p>{movie.overview}</p>
                    </div>

                </div>
			))}
		</>
	);
};

export default MovieList;
