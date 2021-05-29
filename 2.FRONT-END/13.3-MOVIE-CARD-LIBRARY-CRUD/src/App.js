import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import EditMovie from './pages/EditMovie';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import MovieList from './pages/MovieList';

function App() {
  return (
    <BrowserRouter>
      <div>Movie Card Library CRUD</div>
      <Switch>
        <Route path="/movies/new" component={ NewMovie } />
        <Route path="/movies/:id/edit" component={ EditMovie } />
        <Route path="/movies/:id" component={ MovieDetails } />
        <Route exact path="/" component={ MovieList } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
