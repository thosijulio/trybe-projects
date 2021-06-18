import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import { NotFound } from '../components';

describe('Testa o component NotFound', () => {
  test('a pagina contem um h2 com um texto especifico', () => {
    renderWithRouter(<NotFound />);

    const notFoundText = screen.getByRole(
      'heading',
      { level: 2, name: 'Page requested not found Crying emoji' },
    );
    const notFoundImage = screen.getAllByRole('img');

    expect(notFoundText).toBeDefined();
    expect(notFoundImage[1].src).toBe('https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
  });
});
