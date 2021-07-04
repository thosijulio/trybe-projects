import React from 'react';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.handleFormChange = this.handleFormChange.bind(this);
  }

  handleFormChange(event) {
    const name = event.target.id;
    const { target: { value } } = event;

    this.setState((oldState) => ({
      ...oldState,
      [name]: value,
    }));
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form htmlFor="title" data-testid="add-movie-form">
        <label htmlFor="title-inp" data-testid="title-input-label">
          Título
          <input
            id="title"
            type="text"
            value={ title }
            data-testid="title-input"
            onChange={ this.handleFormChange }
          />
        </label>
        <label htmlFor="subtitle" data-testid="subtitle-input-label">
          Subtítulo
          <input
            id="subtitle"
            type="text"
            value={ subtitle }
            data-testid="subtitle-input"
            onChange={ this.handleFormChange }
          />
        </label>
        <p>{ subtitle + title + imagePath + storyline + rating + genre }</p>
      </form>
    );
  }
}

export default AddMovie;
