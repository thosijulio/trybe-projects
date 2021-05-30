import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

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
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.addMovie = this.addMovie.bind(this);
  }

  onSearchTextChange(event) {
    const { value } = event.target;
    const { movies } = this.props;
    this.setState({
      searchText: value,
      movies,
    });
    if (value !== '') {
      this.setState((oldState) => ({
        movies: oldState.movies.filter((movie) => {
          let { title, subtitle, storyline } = movie;
          title = title.toLowerCase();
          subtitle = subtitle.toLowerCase();
          storyline = storyline.toLowerCase();
          if (title.includes(value)) return 1;
          if (subtitle.includes(value)) return 1;
          if (storyline.includes(value)) return 1;
          return 0;
        }),
      }));
    }
  }

  onBookmarkedChange(event) {
    const { checked } = event.target;
    const { movies } = this.props;
    this.setState({ bookmarkedOnly: checked });
    if (checked) {
      this.setState((oldState) => ({
        movies: oldState.movies.filter((movie) => movie.bookmarked),
      }));
    } else {
      this.setState({ movies });
    }
  }

  onSelectedGenreChange(event) {
    const { value } = event.target;
    const { movies } = this.props;
    this.setState({
      selectedGenre: value,
      movies,
    });
    if (value !== '') {
      this.setState((oldState) => ({
        movies: oldState.movies.filter((movie) => (movie.genre === value ? 1 : 0)),
      }));
    }
  }

  addMovie(newMovie) {
    const { movies } = this.state;
    movies.push(newMovie);
    this.setState({
      movies,
    });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <section>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.onSearchTextChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.onBookmarkedChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.addMovie } />
      </section>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
