import React from 'react';
import PropTypes from 'prop-types';

class InputNumberType extends React.Component {
  render() {
    const { text, name, value, onChange } = this.props;

    return (
      <label htmlFor={ `${name}` } data-testid={ `${name}-input-label` }>
        { text }
        <input
          data-testid={ `${name}-input` }
          type="number"
          id={ name }
          name={ name }
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

InputNumberType.propTypes = {
  text: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputNumberType;
