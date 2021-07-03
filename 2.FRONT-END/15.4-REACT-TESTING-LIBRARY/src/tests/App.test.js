import React from 'react';
import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';
import App from '../App';
import renderWithRouter from './renderWithRouter';

describe('Teste do componente App.js', () => {
  test('A página principal da pokedex é renderizada na URL /', () => {
    renderWithRouter(<App />);
    const mainTitle = screen.getByRole('heading', {
      level: 2,
      name: 'Encountered pokémons',
    });

    expect(mainTitle).toBeDefined();
  });

  test('O topo da aplicação contem um conjunto de links de navegacao', () => {
    renderWithRouter(<App />);

    const homeLink = screen.getByRole('link', { name: 'Home' });
    const aboutLink = screen.getByRole('link', { name: 'About' });
    const favoriteLink = screen.getByRole('link', { name: 'Favorite Pokémons' });

    expect(homeLink).toBeDefined();
    expect(aboutLink).toBeDefined();
    expect(favoriteLink).toBeDefined();
  });

  test('app é redirecionado a URL / ao clicar no link Home', () => {
    const { history } = renderWithRouter(<App />);
    const homeLink = screen.getByRole('link', { name: 'Home' });

    userEvent.click(homeLink);

    const { location: { pathname } } = history;

    expect(pathname).toBe('/');
  });

  test('app é redirecionado a URL /about ao clicar no link About', () => {
    const { history } = renderWithRouter(<App />);
    const aboutLink = screen.getByRole('link', { name: 'About' });

    userEvent.click(aboutLink);

    const { location: { pathname } } = history;

    expect(pathname).toBe('/about');
  });

  test('app é redirecionado a URL /favorites ao clicar no link Favorites', () => {
    const { history } = renderWithRouter(<App />);
    const favoriteLink = screen.getByRole('link', { name: 'Favorite Pokémons' });

    userEvent.click(favoriteLink);

    const { location: { pathname } } = history;

    expect(pathname).toBe('/favorites');
  });

  test('app é redirecionado a pagina NotFound caso url nao exista', () => {
    const { history } = renderWithRouter(<App />);

    history.push('/404');

    const errorImage = screen.getByText(/Page requested not found/i);

    expect(errorImage).toBeDefined();
  });
});
