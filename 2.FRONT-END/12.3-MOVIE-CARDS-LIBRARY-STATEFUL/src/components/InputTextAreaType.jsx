import React from 'react';
import PropTypes from 'prop-types';

class InputTextAreaType extends React.Component {
  render() {
    const { text, name, value, onChange } = this.props;

    return (
      <label htmlFor={ name } data-testid={ `${name}-input-label` }>
        { text }
        <textarea
          data-testid={ `${name}-input` }
          id={ name }
          name={ name }
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

InputTextAreaType.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default InputTextAreaType;
