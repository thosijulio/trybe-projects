import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  INITIAL_STATE = {
    subtitle: '',
    title: '',
    imagePath: '',
    storyline: '',
    rating: 0,
    genre: 'action',
  };

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
    if (type === 'select') {
      return (
        <label htmlFor={ `${name}` } data-testid={ `${name}-input-label` }>
          {legend}
          <select
            id={ name }
            type={ type }
            data-testid={ `${name}-input` }
            value={ value }
            onChange={ this.handleFormChange }
          >
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </label>
      );
    } if (type !== 'textarea') {
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
    const { onClick } = this.props;

    return (
      <form data-testid="add-movie-form">
        { this.renderForm('title', 'text', 'Título', title)}
        { this.renderForm('subtitle', 'text', 'Subtítulo', subtitle)}
        { this.renderForm('image', 'text', 'Imagem', imagePath)}
        { this.renderForm('storyline', 'textarea', 'Sinopse', storyline)}
        { this.renderForm('rating', 'number', 'Avaliação', rating)}
        { this.renderForm('genre', 'select', 'Gênero', genre)}
        <button
          type="button"
          data-testid="send-button"
          onClick={ () => { onClick(this.state); this.setState(this.INITIAL_STATE); } }
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
