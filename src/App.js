import React, { Component } from 'react';
import { Header } from './components';
import Films from './features/films';
import Favoris from './features/favoris';
import apiMovie, { apiMovieMap } from './config/api.movie';
import apiFirebase from './config/api.firebase';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      movies: null,
      favoris: null,
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

    apiFirebase.get('favoris.json')
               .then(response => {
                 let favoris = response.data ? response.data : [];
                 this.updateFavori(favoris);
               })
  }

  updateLanguage = (language) => {
    this.setState({
      language,
      loaded: this.state.favoris ? true : false
    })
  }

  updateFavori = (favoris) => {
    this.setState({
      favoris,
      loaded: this.state.movies ? true : false
    })
  }

  updateMovies = (movies) => {
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

  addFavori = (title) => {
    const favoris = this.state.favoris.slice();
    const film = this.state.movies.find(m => m.title === title);
    favoris.push(film);
    this.setState({
      favoris
    }, () => {
      this.saveFavori();
    });
  }

  deleteFavori = (title) => {
    const favoris = this.state.favoris.slice();
    const index = this.state.favoris.findIndex( f => f.title === title);
    favoris.splice(index,1);
    this.setState({
      favoris
    }, () => {
      this.saveFavori();
    })
  }

  saveFavori = () => {
    apiFirebase.put('favoris.json',this.state.favoris)
  }

  render() {
    return (
      <Router>
        <div className="App d-flex flex-column">
          <Header />
          <Switch>
            <Route path="/films" render={ (props) => (
              <Films
                {...props}
                loaded={this.state.loaded}
                updateMovies={this.updateMovies}
                updateSelectedMovie={this.updateSelectedMovie}
                movies={this.state.movies}
                selectedMovie={this.state.selectedMovie}
                addFavori={this.addFavori}
                deleteFavori={this.deleteFavori}
                favoris={this.state.favoris}
              />
             ) }/>
            <Route path="/favoris" render={ (props) => (
              <Favoris 
                {...props}
                loaded={this.state.loaded}
                favoris={this.state.favoris}
                deleteFavori={this.deleteFavori}
              />
            ) } />
            <Redirect to="/films" />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;