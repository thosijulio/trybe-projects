import React from 'react';
import AddMovie from './AddMovie';
import SearchBar from './SearchBar';

class MovieLibrary extends React.Component {
  constructor() {
    super();
    console.log('oi');
  }

  onClick(state) {
    console.log(state);
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

export default MovieLibrary;
