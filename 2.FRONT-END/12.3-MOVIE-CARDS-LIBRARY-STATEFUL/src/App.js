import React from 'react';
import Header from './components/Header';
import './App.css';
import SearchBar from './components/SearchBar';
import AddMovie from './components/AddMovie';
import MovieLibrary from './components/MovieLibrary';

const propsSearchBar = {
  searchText: '',
  onSearchTextChange: () => {},
  bookmarkedOnly: false,
  onBookmarkedChange: () => {},
  selectedGenre: '',
  onSelectedGenreChange: () => {},
};

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar { ...propsSearchBar } />
      <AddMovie onClick={ () => {} } />
      <MovieLibrary movies={ [] } />
    </div>
  );
}

export default App;
