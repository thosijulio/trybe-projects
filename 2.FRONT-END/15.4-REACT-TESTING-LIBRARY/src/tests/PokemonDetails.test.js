import React from 'react';
import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';
import App from '../App';
import renderWithRouter from './renderWithRouter';

describe('Testa o componente PokemonDetails', () => {
  const MORE_DETAILS = 'More details';

  test('As informações detalhades de um poke é exibida', () => {
    renderWithRouter(<App />);

    const btnMoreInfo = screen.getByRole('link', { name: MORE_DETAILS });
    const summaryText = ['This intelligent Pokémon ',
      'roasts hard berries with electricity to make ',
      'them tender enough to eat.',
    ];
    userEvent.click(btnMoreInfo);

    const detailsPageHeader = screen.getByText('Pikachu Details');
    const moreInfoBtn = screen.queryByRole('link', { name: MORE_DETAILS });
    const summarySection = screen.getByText('Summary');
    const summaryInfos = screen.getByText(summaryText.join(''));

    expect(moreInfoBtn).toBeNull();
    expect(detailsPageHeader).toBeDefined();
    expect(summarySection).toBeDefined();
    expect(summaryInfos).toBeDefined();
  });

  test('existe uma seção com as localizacoes do pokemon', () => {
    renderWithRouter(<App />);

    const btnMoreInfo = screen.getByRole('link', { name: MORE_DETAILS });

    userEvent.click(btnMoreInfo);

    const summaryText = screen.getByRole('heading', {
      level: 2,
      name: 'Game Locations of Pikachu',
    });
    const pokeLocations = screen.getAllByRole('img', { name: 'Pikachu location' });

    expect(summaryText).toBeDefined();
    expect(pokeLocations.length).toBe(2);
    expect(pokeLocations[0].src).toBe('https://cdn2.bulbagarden.net/upload/0/08/Kanto_Route_2_Map.png');
  });
  test('é possivel favoritar um pokemon', () => {
    renderWithRouter(<App />);

    const btnMoreInfo = screen.getByRole('link', { name: MORE_DETAILS });

    userEvent.click(btnMoreInfo);

    const favoriteCheckbox = screen.getByLabelText('Pokémon favoritado?');

    expect(favoriteCheckbox).not.toBeNull();
  });
});
