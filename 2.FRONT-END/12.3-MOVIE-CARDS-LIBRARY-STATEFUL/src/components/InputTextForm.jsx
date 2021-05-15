import React from 'react';
import PropTypes from 'prop-types';

class InputTextType extends React.Component {
  render() {
    const { text, name, value, onChange } = this.props;
    const rightName = name.startsWith('image') ? 'image' : name;

    return (
      <label htmlFor={ `${rightName}` } data-testid={ `${rightName}-input-label` }>
        { text }
        <input
          data-testid={ `${rightName}-input` }
          type="text"
          id={ rightName }
          name={ name }
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

InputTextType.propTypes = {
  text: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputTextType;
