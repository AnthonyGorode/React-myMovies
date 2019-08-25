import React, { Component } from 'react';
import { Header } from './components';
import Films from './features/films';
import apiMovie, { apiMovieMap } from './config/api.movie';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      movies: null,
      loaded: false,
      language: 'fr-FR',
      selectedMovie: 0
    }
  }

  componentDidMount = () => {
    apiMovie.get('/discover/movie?language='+this.state.language)
            .then(response => response.data.results)
            .then( moviesApi => {
              const movies = moviesApi.map(apiMovieMap)
              this.updateMovies(movies);
            })
            .catch(err => console.log(err));
  }

  updateMovies = (movies) => {
    this.setState({
      movies,
      loaded: true
    })
  }

  updateLanguage = (language) => {
    this.setState({
      language,
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
        <Films 
          loaded={this.state.loaded}
          updateMovies={this.updateMovies}
          updateSelectedMovie={this.updateSelectedMovie}
          movies={this.state.movies}
          selectedMovie={this.state.selectedMovie}
        />
      </div>
    );
  }
}

export default App;