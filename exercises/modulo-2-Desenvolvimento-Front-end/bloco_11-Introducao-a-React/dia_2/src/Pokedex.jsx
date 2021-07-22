import React from 'react';
import Pokemon from './Pokemon';
import pokemons from './Data';

class Pokedex extends React.Component {
  render() {
    return (
      <div>
        <h1>Pokedex</h1>
        { pokemons.map(({ id, name, type, averageWeight, image }) => (
          <Pokemon 
            key={ id }
            name={ name }
            type={ type }
            averageWeight={ averageWeight }
            image={ image }
          />
        ))}
      </div>
    )
  }
}

export default Pokedex;