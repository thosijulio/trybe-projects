import React from 'react';
import Header from './components/Header';
import './App.css';
import SearchBar from './components/SearchBar';

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
    </div>
  );
}

export default App;
