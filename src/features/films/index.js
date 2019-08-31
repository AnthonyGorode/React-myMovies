import React from 'react';
import { MovieDetails, MovieList, SearchBar } from './components';
import Loading from '../../components/utils/Loading';
import { connect } from 'react-redux';
import { moviesIsLoadingSelector, moviesListSelector, favorisListName, moviesSelectedMovieSelector } from '../../store/selectors';
import { fetchMovies, setSelectedMovie, tryAddFavori, tryRemoveFavori } from '../../store/actions';
 
const Films = (props) => {
    return (
        <>
            <SearchBar updateMovies={props.fetchMovies} />
            {
                props.isLoading ? (
                    <Loading />
                ) : (
                    <div className="d-flex flex-row flex-fill pt-4 p-2" >
                        <MovieList 
                            movies={props.movies} 
                            updateSelectedMovie={props.setSelectedMovie}
                            favoris={props.favorisListName }
                            addFavori={ props.tryAddFavori }
                            deleteFavori={ props.tryRemoveFavori } 
                        />
                        <MovieDetails 
                            movie={props.selectedMovie} 
                        />
                    </div>
                )
            }
        </>
    );
}

export default connect(state => ({
    isLoading: moviesIsLoadingSelector(state),
    movies: moviesListSelector(state),
    favorisListName: favorisListName(state),
    selectedMovie: moviesSelectedMovieSelector(state)
}),{
    fetchMovies,
    setSelectedMovie,
    tryRemoveFavori,
    tryAddFavori
})(Films)