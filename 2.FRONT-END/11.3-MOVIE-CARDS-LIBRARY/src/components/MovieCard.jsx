import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <section className="movie-card">
        <img src={ movie.imagePath } alt={ movie.title } className="movie-card-image" />
        <h4 className="movie-card-title">
          { movie.title }
        </h4>
        <h5 className="movie-card-subtitle">
          { movie.subtitle }
        </h5>
        <p className="movie-card-storieline">
          { movie.storyline }
        </p>
        <Rating rating={ movie.rating } />
      </section>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.exact({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    imagePath: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieCard;
