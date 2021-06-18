import React from 'react';
import { screen } from '@testing-library/react';
import About from '../components/About';
import renderWithRouter from './renderWithRouter';

describe('Teste do component About', () => {
  test('A pagina contem dois paragrafos com textos sobre a pokedex', () => {
    renderWithRouter(<About />);

    const pokemonsInfos = document.getElementsByTagName('p');

    expect(pokemonsInfos.length).toBe(2);
  });

  test('A pagina contem um heading h2 com o texto \'About Pokedex\'', () => {
    renderWithRouter(<About />);

    const aboutHeading = screen.getByRole('heading', { name: 'About Pokédex' });

    expect(aboutHeading).toBeDefined();
  });

  test('A pagina contem uma imagem de uma pokedex', () => {
    const srcImage = 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png';
    renderWithRouter(<About />);

    const image = screen.getByRole('img');

    expect(image.src).toBe(srcImage);
  });
});
