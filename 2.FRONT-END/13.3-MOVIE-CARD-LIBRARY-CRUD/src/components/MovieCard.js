import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie: { id, title, subtitle, storyline, imagePath } } = this.props;
    return (
      <div
        data-testid="movie-card"
        style={ ({
          textAlign: 'center',
          alignItems: 'center',
          width: '300px',
          margin: '30px 100px',
          border: '1px solid black',
        }) }
      >
        <h2>{ title }</h2>
        <h3>{ subtitle }</h3>
        <img
          src={ imagePath }
          alt={ `${title} cover art` }
          width="300px"
          margin="auto"
          height="200px"
        />
        <h4 style={ ({ textAlign: 'center' }) }>{ storyline }</h4>
        <Link to={ `/movies/${id}` }>VER DETALHES</Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    imagePath: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieCard;
