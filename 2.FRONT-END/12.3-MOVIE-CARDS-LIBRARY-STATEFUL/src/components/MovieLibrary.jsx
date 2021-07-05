import React from 'react';
import PropTypes from 'prop-types';
import AddMovie from './AddMovie';
import SearchBar from './SearchBar';
import MovieList from './MovieList';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
    this.handleTextSearch = this.handleTextSearch.bind(this);
    this.handleBookmarkedSearch = this.handleBookmarkedSearch.bind(this);
    this.handleGenrerSearch = this.handleGenrerSearch.bind(this);
    this.handleNewMovie = this.handleNewMovie.bind(this);
  }

  handleTextSearch(event) {
    const { value } = event.target;
    const { movies } = this.props;

    const newmovies = movies.filter((movie) => (
      movie.title.includes(value)
      || movie.subtitle.includes(value)
      || movie.storyline.includes(value) ? movie : false
    ));
    this.setState((oldState) => ({
      ...oldState,
      movies: newmovies,
      searchText: value,
    }));
  }

  handleBookmarkedSearch(event) {
    const { movies } = this.props;
    const { checked } = event.target;

    if (checked) {
      const newMovies = movies.filter((movie) => (
        movie.bookmarked ? movie : false
      ));
      this.setState((oldState) => ({
        ...oldState,
        movies: newMovies,
        bookmarkedOnly: !oldState.bookmarkedOnly,
      }));
    } else {
      this.setState((oldState) => ({
        ...oldState,
        movies,
        bookmarkedOnly: !oldState.bookmarkedOnly,
      }));
    }
  }

  handleGenrerSearch(event) {
    const { value } = event.target;
    const { movies } = this.props;

    if (value === '') {
      this.setState((oldState) => ({
        ...oldState,
        movies,
        selectedGenre: value,
      }));
    } else {
      const newMovies = movies.filter((movie) => (
        movie.genre === value ? movie : false
      ));
      this.setState((oldState) => ({
        ...oldState,
        movies: newMovies,
        selectedGenre: value,
      }));
    }
  }

  handleNewMovie(state) {
    const { subtitle, title, imagePath, storyline, rating, genre } = state;
    this.setState((oldState) => ({
      ...oldState,
      movies: oldState.movies.concat({
        title,
        subtitle,
        imagePath,
        storyline,
        rating,
        genre,
      }),
    }));
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleTextSearch }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleBookmarkedSearch }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleGenrerSearch }
        />
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.handleNewMovie } />
      </>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    imagePath: PropTypes.string.isRequired,
    bookmarked: PropTypes.bool.isRequired,
    genre: PropTypes.string.isRequired,
  })).isRequired,
};

export default MovieLibrary;
