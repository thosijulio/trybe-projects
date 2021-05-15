// implement AddMovie component here
import React from 'react';
import InputTextType from './InputTextType';

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

    return (
      <form data-testid="add-movie-form">
        <InputTextType
          text="Título"
          name="title"
          value={ title }
          onChange={ this.handleFormChange }
        />
      </form>
    );
  }
}

export default AddMovie;
