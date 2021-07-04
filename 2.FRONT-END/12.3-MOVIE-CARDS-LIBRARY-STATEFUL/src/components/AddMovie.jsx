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
    this.renderForm = this.renderForm.bind(this);
  }

  handleFormChange(event) {
    const name = event.target.id === 'image' ? 'imagePath' : event.target.id;
    const { target: { value } } = event;

    this.setState((oldState) => ({
      ...oldState,
      [name]: value,
    }));
  }

  renderForm(name, type, legend, value) {
    if (type !== 'textarea') {
      return (
        <label htmlFor={ `${name}` } data-testid={ `${name}-input-label` }>
          {legend}
          <input
            id={ name }
            type={ type }
            data-testid={ `${name}-input` }
            value={ value }
            onChange={ this.handleFormChange }
          />
        </label>
      );
    }
    return (
      <label htmlFor={ `${name}` } data-testid={ `${name}-input-label` }>
        {legend}
        <textarea
          id={ name }
          value={ value }
          data-testid={ `${name}-input` }
          onChange={ this.handleFormChange }
        />
      </label>
    );
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        { this.renderForm('title', 'text', 'Título', title)}
        { this.renderForm('subtitle', 'text', 'Subtítulo', subtitle)}
        { this.renderForm('image', 'text', 'Imagem', imagePath)}
        { this.renderForm('storyline', 'textarea', 'Sinopse', storyline)}
        <p>{ genre + rating + storyline }</p>
      </form>
    );
  }
}

export default AddMovie;
