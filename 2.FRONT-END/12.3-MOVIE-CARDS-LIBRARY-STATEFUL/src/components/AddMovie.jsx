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
  }

  render() {
    const { title, subtitle, imagePath, storyLine, rating, genre } = this.state;
    return (
      <form>
        <input value={ title } />
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
