// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyLine: '',
      rating: 0,
      genre: 'action',
    };
    this.handleFormChange = this.handleFormChange.bind(this);
  }

  handleFormChange(event) {
    const { type } = event;
    if (type !== 'checkbox') {
      const { value, name } = event.target;
      this.setState({
        [name]: value,
      });
    }
  }

  render() {
    const { title, subtitle, imagePath, storyLine, rating, genre } = this.state;
    const salva = subtitle + imagePath + storyLine + rating + genre;
    const { onClick } = this.props;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title" data-testeid="title-input-label">
          Título
          <input
            type="text"
            id="title"
            name="title"
            data-testeid="title-input"
            value={ title }
            onChange={ this.handleFormChange }
          />
          <p>{ salva }</p>
        </label>
        <button onClick={ onClick } type="submit">Enviar</button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
