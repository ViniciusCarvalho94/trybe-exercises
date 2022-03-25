import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from './App';

const digimon = [
  {
  name: 'Agumon',
  img: 'https://digimon.shadowsmith.com/img/agumon.jpg',
  level: 'Rookie'
  }
];

describe('Teste da aplicação toda', () => {
  it('renders App', async () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/Faça uma pesquisa/i);
    expect(linkElement).toBeInTheDocument();
  });
});

describe('Testa se o fetch "Agumon" vai retornar da maneira certa, e se o campo de pesquisa e o botão estão funcionais', () => {
  it('fetch', async () => {
    global.fetch = jest.fn(function () {
      return Promise.resolve({ json: () => (digimon) })
    })
    render(<App />);
    const inputSearch = screen.getByTestId('search-input');
    expect(inputSearch).toBeInTheDocument();
    expect(inputSearch).toHaveValue('');

    userEvent.type(inputSearch, 'Agumon');
    expect(inputSearch).toHaveValue('Agumon');

    const searchButton = screen.getByTestId('search-button');
    expect(searchButton).toBeInTheDocument();
    userEvent.click(searchButton);
    
    const name = await screen.findByTestId('digimonName');
    expect(name).toBeInTheDocument();

    const level = await screen.findByTestId('digimonLevel')
    expect(level).toBeInTheDocument();

    const img = await screen.findByRole('img')
    expect(img).toBeInTheDocument();
  })
})
