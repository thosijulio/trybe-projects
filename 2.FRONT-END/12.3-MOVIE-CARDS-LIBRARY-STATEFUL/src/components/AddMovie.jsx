// implement AddMovie component here
import React from 'react';

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
        </label>
        <input value={ subtitle } onChange={ this.handleFormChange } />
        <input value={ imagePath } onChange={ this.handleFormChange } />
        <input value={ storyLine } onChange={ this.handleFormChange } />
        <input value={ rating } onChange={ this.handleFormChange } />
        <input value={ genre } onChange={ this.handleFormChange } />
      </form>
    );
  }
}

export default AddMovie;
