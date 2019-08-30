import React from 'react';
import { MovieDetails, MovieList, SearchBar } from './components';
import Loading from '../../components/utils/Loading';

export default (props) => {
    return (
        <>
            <SearchBar updateMovies={props.updateMovies} />
            {
                props.loaded ? (
                    <div className="d-flex flex-row flex-fill pt-4 p-2" >
                        <MovieList 
                            movies={props.movies} 
                            updateSelectedMovie={props.updateSelectedMovie}
                            favoris={props.favoris.map(f => f.title) }
                            addFavori={ props.addFavori }
                            deleteFavori={ props.deleteFavori } 
                        />
                        <MovieDetails 
                            movie={props.movies[props.selectedMovie]} 
                        />
                    </div>
                ) : (
                    <Loading />
                )
            }
        </>
    );
}