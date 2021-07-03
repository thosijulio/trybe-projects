import React from 'react';
import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';
import App from '../App';
import renderWithRouter from './renderWithRouter';

describe('Teste do componente Pokemon', () => {
  const MORE_DETAILS = 'More details';
  test('é renderizado um card com infos de pokemon', () => {
    renderWithRouter(<App />);

    const pokeName = screen.getByText('Pikachu');
    const pokeType = screen.getByTestId('pokemon-type');
    const pokeWeigth = screen.getByText('Average weight: 6.0 kg');
    const pokeImg = screen.getByRole('img');

    expect(pokeName).toBeDefined();
    expect(pokeType.innerHTML).toBe('Electric');
    expect(pokeWeigth).toBeDefined();
    expect(pokeImg.src).toBe('https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png');
    expect(pokeImg.alt).toBe('Pikachu sprite');
  });

  test('Card do pokemon contem um link para exibir detalhes com url especifica', () => {
    const { history } = renderWithRouter(<App />);

    const moreInfoBtn = screen.getByRole('link', { name: MORE_DETAILS });

    userEvent.click(moreInfoBtn);

    const { location: { pathname } } = history;

    expect(pathname).toBe('/pokemons/25');
  });

  test('clicar no link de detalhes, é feito o redirecionamento correto', () => {
    renderWithRouter(<App />);

    const moreInfoBtn = screen.getByRole('link', { name: MORE_DETAILS });

    userEvent.click(moreInfoBtn);

    const pokeDetails = screen.getByText('Pikachu Details');

    expect(pokeDetails).toBeDefined();
  });

  test('Existe uma imagem quando um pokemon é favoritado', () => {
    renderWithRouter(<App />);

    const moreInfoBtn = screen.getByRole('link', { name: MORE_DETAILS });

    userEvent.click(moreInfoBtn);

    const favoriteCheckbox = screen.getByLabelText('Pokémon favoritado?');

    userEvent.click(favoriteCheckbox);

    const favoriteImg = screen.getByRole('img',
      { src: 'star-icon.svg', name: 'Pikachu is marked as favorite' });

    expect(favoriteImg.src).toBe('http://localhost/star-icon.svg');
  });
});
