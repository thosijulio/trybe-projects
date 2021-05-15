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
      const { value } = event.target;
      this.setState({
        title: value,
      });
    }
  }

  render() {
    const { title, subtitle, imagePath, storyLine, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title-input" data-testeid="title-input-label">
          Título
          <input
            id="title-input"
            type="text"
            data-testeid="title-input"
            onChange={ this.handleFormChange }
            value={ title }
          />
        </label>
        <input value={ subtitle } />
        <input value={ imagePath } />
        <input value={ storyLine } />
        <input value={ rating } />
        <input value={ genre } />
      </form>
    );
  }
}

export default AddMovie;
