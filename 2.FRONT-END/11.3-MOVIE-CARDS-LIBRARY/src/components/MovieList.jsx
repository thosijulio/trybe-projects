import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      movies.map((movie, key) => <MovieCard key={ key } />)
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.string.isRequired,
};

export default MovieList;
