// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const { bookmarkedOnly, searchText, selectedGenre } = this.props;
    const { onBookmarkedChange, onSearchTextChange, onSelectedGenreChange } = this.props;

    return (
      <form data-testid="search-bar-form">
        <label htmlFor="search-bar-input" data-testid="text-input-label">
          Inclui o texto:
          <input
            id="search-bar-input"
            name="search-bar-input"
            value={ searchText }
            onChange={ onSearchTextChange }
            data-testid="text-input"
            type="text"
          />
        </label>
        <label data-testid="checkbox-input-label" htmlFor="search-bar-checkbox">
          Mostrar somente favoritos
          <input
            id="search-bar-checkbox"
            name="search-bar-checkbox"
            type="checkbox"
            checked={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
            data-testid="checkbox-input"
          />
        </label>
        <label htmlFor="search-bar-select" data-testid="select-input-label">
          Filtrar por gênero
          <select
            id="search-bar-select"
            name="search-bar-select"
            value={ selectedGenre }
            onChange={ onSelectedGenreChange }
            data-testid="select-input"
          >
            <option value="" data-testid="select-option">Todos</option>
            <option value="action" data-testid="select-option">Ação</option>
            <option value="comedy" data-testid="select-option">Comédia</option>
            <option value="thriller" data-testid="select-option">Suspense</option>
          </select>
        </label>
      </form>
    );
  }
}

SearchBar.propTypes = {
  bookmarkedOnly: PropTypes.bool.isRequired,
  searchText: PropTypes.string.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};

export default SearchBar;
