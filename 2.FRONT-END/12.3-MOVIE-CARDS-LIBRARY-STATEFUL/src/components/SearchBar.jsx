// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const {
      bookmarkedOnly,
      onBookmarkedChange,
      searchText,
      onSearchTextChange,
    } = this.props;

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
      </form>
    );
  }
}

SearchBar.propTypes = {
  bookmarkedOnly: PropTypes.bool.isRequired,
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
};

export default SearchBar;
