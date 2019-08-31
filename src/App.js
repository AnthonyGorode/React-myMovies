import React, { Component } from 'react';
import { Header } from './components';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import Loadable from 'react-loadable';
import { connect } from 'react-redux';
import { fetchFavoris } from './store/actions';

const LazyFilms = Loadable({
  loader: () => import(/* webpackChunkName: 'LazyFilms' */'./features/films'),
  loading: () => <h1>Loading ...</h1>
})

const LazyFavoris = Loadable({
  loader: () => import(/* webpackChunkName: 'LazyFavoris' */'./features/favoris'),
  loading: () => <h1>Loading ...</h1>
})

class App extends Component {

  componentDidMount = () => {
    // apiMovie.get('/discover/movie?language='+this.state.language)
    //         .then(response => response.data.results)
    //         .then( moviesApi => {
    //           const movies = moviesApi.map(apiMovieMap)
    //           this.updateMovies(movies);
    //         })
    //         .catch(err => console.log(err));

    // apiFirebase.get('favoris.json')
    //            .then(response => {
    //              let favoris = response.data ? response.data : [];
    //              this.updateFavori(favoris);
    //            })

    this.props.fetchFavoris();
  }

  render() {
    return (
      <div className="App d-flex flex-column">
        <Header />
        <Switch>
          <Route path="/films" component={ LazyFilms }/>
            ) }/>
          <Route path="/favoris" component={ LazyFavoris }/>
          ) } />
          <Redirect to="/films" />
        </Switch>
      </div>
    );
  }
}

export default withRouter(connect(null,{
  fetchFavoris,
})(App));