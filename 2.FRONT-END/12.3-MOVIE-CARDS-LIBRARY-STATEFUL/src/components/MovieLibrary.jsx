import React from 'react';
import PropTypes from 'prop-types';
import AddMovie from './AddMovie';
import SearchBar from './SearchBar';

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
    this.onClick = this.onClick.bind(this);
    this.handleSearchBarChange = this.handleSearchBarChange.bind(this);
  }

  handleSearchBarChange(event) {
    const { id, value, checked } = event.target;

    switch (id) {
    case 'text-inp':
      this.setState((oldState) => ({
        ...oldState,
        searchText: value,
      }));
      break;
    case 'checkbox-inp':
      this.setState((oldState) => ({
        ...oldState,
        bookmarkedOnly: checked,
      }));
      break;
    default:
      this.setState((oldState) => ({
        ...oldState,
        selectedGenre: value,
      }));
      break;
    }
  }

  onClick(state) {
    console.log(state);
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    console.log(movies);
    return (
      <>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleSearchBarChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleSearchBarChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleSearchBarChange }
        />
        <AddMovie onClick={ this.onClick } />
      </>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default MovieLibrary;
