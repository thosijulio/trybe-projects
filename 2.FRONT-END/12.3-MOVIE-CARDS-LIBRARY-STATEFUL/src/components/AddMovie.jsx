// implement AddMovie component here
import React from 'react';
import InputTextType from './InputTextType';
import InputNumberType from './InputNumberType';
import InputSelectType from './InputSelectType';

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
    const { value, name } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;

    return (
      <form data-testid="add-movie-form">
        <InputTextType
          text="Título"
          name="title"
          value={ title }
          onChange={ this.handleFormChange }
        />
        <InputTextType
          text="Subtítulo"
          name="subtitle"
          value={ subtitle }
          onChange={ this.handleFormChange }
        />
        <InputTextType
          text="Imagem"
          name="imagePath"
          value={ imagePath }
          onChange={ this.handleFormChange }
        />
        <label htmlFor="storyline" data-testid="storyline-input-label">
          Sinopse
          <textarea
            id="storyline"
            data-testid="storyline-input"
            name="storyline"
            value={ storyline }
            onChange={ this.handleFormChange }
          />
        </label>
        <InputNumberType
          text="Avaliação"
          name="rating"
          value={ rating }
          onChange={ this.handleFormChange }
        />
        <InputSelectType
          text="Gênero"
          name="genre"
          value={ genre }
          onChange={ this.handleFormChange }
        />
      </form>
    );
  }
}

export default AddMovie;
