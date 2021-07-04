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
  }

  onClick(state) {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    console.log(state, searchText, bookmarkedOnly, selectedGenre, movies);
  }

  render() {
    return (
      <>
        <SearchBar
          searchText=""
          onSearchTextChange={ () => {} }
          bookmarkedOnly={ false }
          onBookmarkedChange={ () => {} }
          selectedGenre=""
          onSelectedGenreChange={ () => {} }
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
