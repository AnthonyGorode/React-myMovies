import React, { Component } from 'react';
import { Header, MovieList, MovieDetails, Loading } from './components';
import apiMovie from './config/api.movie';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      movies: null,
      loaded: false,
      selectedMovie: 0
    }
  }

  componentDidMount(){
    apiMovie.get('/discover/movie')
            .then(response => response.data.results)
            .then( moviesApi => {
              const movies = moviesApi.map( m => ({
                img:'https://image.tmdb.org/t/p/w500' + m.poster_path,
                title: m.title,
                details: `${m.release_date} | ${m.vote_average}/10 (${m.vote_count})`,
                description: m.overview
              }))
              this.updateMovies(movies);
            })
            .catch(err => console.log(err));
  }

  updateMovies(movies){
    this.setState({
      movies,
      loaded: true
    })
  }


  updateSelectedMovie = (index) => {
    // met à jour selectedMovie avec le nouvel index
    this.setState({
      selectedMovie : index
    });
  }

  render() {
    return (
      <div className="App d-flex flex-column">
        <Header />
        { this.state.loaded ? (
          <div className="d-flex flex-row flex-fill pt-4 p-2" >
            <MovieList movies={this.state.movies} updateSelectedMovie={this.updateSelectedMovie} />
            <MovieDetails movie={this.state.movies[this.state.selectedMovie]} />
          </div>
        ) : (
          <Loading />
        ) }
      </div>
    );
  }
}

export default App;