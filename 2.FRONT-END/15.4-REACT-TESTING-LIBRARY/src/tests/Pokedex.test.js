import React from 'react';
import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import App from '../App';

describe('Teste do componente Pokedex', () => {
  const nextPokeText = 'Próximo pokémon';

  test('pagina possui um h2 com texto especifico', () => {
    renderWithRouter(<App />);

    const textFindPokes = screen.getByRole('heading', {
      level: 2,
      name: 'Encountered pokémons',
    });

    expect(textFindPokes).toBeDefined();
  });

  test('O proximo pokemon é exibido ao clicar no botao correspondente', () => {
    renderWithRouter(<App />);

    const nextPokeButton = screen.getByRole('button', { name: nextPokeText });

    userEvent.click(nextPokeButton);

    const secondPokemon = screen.getByText('Charmander');

    const heightProperty = screen.getByText(/Average weight:/i);

    expect(nextPokeButton).toBeDefined();
    expect(secondPokemon).toBeInTheDocument();
    expect(heightProperty).not.toBeNull();
  });

  test('A pokedex tem botoes de filtro', () => {
    renderWithRouter(<App />);

    const fireTypeButton = screen.getByRole('button', { name: 'Fire' });
    const nextPokeButton = screen.getByRole('button', { name: nextPokeText });

    userEvent.click(fireTypeButton);

    const firepoke1 = screen.getByText('Charmander');

    expect(firepoke1).toBeDefined();

    userEvent.click(nextPokeButton);

    const firepoke2 = screen.getByText('Rapidash');

    expect(firepoke2).toBeDefined();
  });

  test('A pokedex tem um botao para resetar o filtro', () => {
    renderWithRouter(<App />);

    const allButton = screen.getByRole('button', { name: 'All' });
    const nextPokeBtn = screen.getByText(nextPokeText);
    const pokemon = screen.getByText('Pikachu');

    expect(pokemon).toBeDefined();

    userEvent.click(allButton);

    const pokemon2 = screen.getByText('Pikachu');

    expect(allButton).toBeDefined();
    expect(pokemon2).toBeDefined();
    expect(nextPokeBtn).not.toBeDisabled();
  });
  test('Existe um botao de filtro para cada tipo de pokemon', () => {
    renderWithRouter(<App />);

    const filterButtons = screen.getAllByTestId('pokemon-type-button');
    const sete = 7;

    expect(filterButtons.length).toBe(sete);
  });
});
