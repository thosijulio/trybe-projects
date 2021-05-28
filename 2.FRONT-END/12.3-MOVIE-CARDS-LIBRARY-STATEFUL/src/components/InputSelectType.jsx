import React from 'react';
import PropTypes from 'prop-types';

class InputSelectType extends React.Component {
  render() {
    const { name, value, onChange, text } = this.props;
    return (
      <label htmlFor={ name } data-testid={ `${name}-input-label` }>
        { text }
        <select
          id={ name }
          name={ name }
          data-testid={ `${name}-input` }
          value={ value }
          onChange={ onChange }
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
    );
  }
}

InputSelectType.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default InputSelectType;
