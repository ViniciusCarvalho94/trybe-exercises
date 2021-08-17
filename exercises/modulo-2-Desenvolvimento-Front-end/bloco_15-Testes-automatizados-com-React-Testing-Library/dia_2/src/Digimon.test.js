import React from 'react';
import { render, screen } from '@testing-library/react';
import Digimon from './Digimon';

describe('Teste da tela do Digimon', () => {
  const digimon = {
    name: 'Agumon',
    img: 'https://digimon.shadowsmith.com/img/agumon.jpg',
    level: 'Rookie'
  }
  
  it('renders Digimon', () => {
    render(<Digimon digimon={ digimon } />);
    const name = screen.getByTestId('digimonName');
    expect(name).toBeInTheDocument();
    expect(name.textContent).toEqual('Agumon')

    const level = screen.getByTestId('digimonLevel')
    expect(level).toBeInTheDocument();
    expect(level.textContent).toEqual('level: Rookie')

    const img = screen.getByRole('img')
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', 'https://digimon.shadowsmith.com/img/agumon.jpg');
    expect(img).toHaveAttribute('alt', 'Agumon');
  })
});
