import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../components/Loading';
import MovieCard from '../components/MovieCard';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    movieAPI.getMovies().then((result) => this.setState({ movies: result }));
  }

  render() {
    const { movies } = this.state;

    if (movies.length === 0) {
      return (
        <Loading />
      );
    }

    return (
      <div
        data-testid="movie-list"
        style={ ({
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'center' }) }
      >
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
        <Link
          to="/movies/new"
          style={ ({ margin: '50px 500px' }) }
        >
          ADICIONAR CARTÃO
        </Link>
      </div>
    );
  }
}

export default MovieList;
