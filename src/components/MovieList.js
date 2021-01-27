import React from 'react';
import Moment from 'react-moment'; 

const MovieList = (props) => {
    // const FavoriteComponent = props.favoriteComponent;

    // another way of rendering 
    let moviesToRender; 
    if (props.movies) {
        moviesToRender = props.movies.map((movie => (
            <div className="movie-container" key={movie.id}>
                
                <div className='image-container d-flex justify-content-center m-3'>
                    <a href={`https://www.themoviedb.org/movie/${movie.id}`} alt="link-to-site">
                        <img src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`} alt='movie'/>
                    </a>
                </div>

                <div className="movie-info">
                    <center><p className="movie-title font-weight-bold">{movie.title}</p></center>
                    <p><span className="movie-date font-weight-bold">Release Date:</span> <Moment format="MMMM D, YYYY">{movie.release_date}</Moment></p>
                    <p><span className="movie-rating font-weight-bold">Rating:</span> {movie.vote_average}</p><span class="oi oi-star"></span>
                    <p><span className="movie-overview font-weight-bold">Overview:</span><br></br>
                        {movie.overview}
                    </p>
                </div>

            </div>
        )))
    }
	return (
		<>
        {moviesToRender}
			{/* {props.movies.filter(movie => movie.id).map(movie => (
                {/* {props.movies && props.movies.map((movie => ( */}
                {/* <div className="movie-container">
                    
                    <div className='image-container d-flex justify-content-start m-3'>
                        <img src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`} alt='movie'></img> */}
                        {/* <div 
                            // adding function from props and adding onClick property
                            onClick={() => props.handleFavoritesClick(movie)}
                            className='overlay d-flex align-items-center justify-content-center'>
                            <FavoriteComponent/>
                        </div> */}
                    {/* </div>

                    <div className="movie-info" key={movie.id}>
                        <center><p className="movie-title font-weight-bold">{movie.title}</p></center>
                        <p><span className="movie-date font-weight-bold">Release Date:</span> <Moment format="MMMM D, YYYY">{movie.release_date}</Moment></p>
                        <p><span className="movie-rating font-weight-bold">Rating:</span> {movie.vote_average}</p>
                        <p><span className="movie-overview font-weight-bold">Overview:</span><br></br>
                            {movie.overview}
                        </p>
                    </div> */}

                {/* </div> */} 
            {/* )))} */}
		</>
	);
};

export default MovieList;
