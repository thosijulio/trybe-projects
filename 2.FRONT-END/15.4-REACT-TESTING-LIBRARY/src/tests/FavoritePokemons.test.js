import React from 'react';
import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';
import App from '../App';
import renderWithRouter from './renderWithRouter';
import { FavoritePokemons } from '../components';

describe('Teste do component FavoritePokemons', () => {
  test('exibido na tela uma mensagem caso nao exista pokes favoritos', () => {
    renderWithRouter(<FavoritePokemons />);

    const notFavMessage = screen.getByText('No favorite pokemon found');

    expect(notFavMessage).toBeDefined();
  });
});
