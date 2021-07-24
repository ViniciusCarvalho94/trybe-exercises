import React from 'react';
import pokemons from './data';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
  constructor() {
    super()
    this.state = {
      index: 0,
      type: '',
    }
    this.addIndex = this.addIndex.bind(this)
    this.typeFilter = this.typeFilter.bind(this)
  }

  addIndex() {
    if((pokemons.length - 1) === this.state.index) {
      return this.setState((beforeClick) => ({
        index: beforeClick.index = 0
      }))
    } return this.setState((beforeClick) => ({
      index: beforeClick.index + 1
    }))
  }

  typeFilter(event) {
    this.setState({ type: event.target.value })
  }
  
  render() {
    return(
      <div>
        <div>
          <Pokemon key={pokemons[this.state.index].id} pokemon={pokemons[this.state.index]} />  
          <button className='next' onClick={this.addIndex}>Next Pokémon</button>
        </div>
        <div>
        <button value='Electric' onClick={ this.typeFilter }>Eletric</button>
        <button value='Fire' onClick={ this.typeFilter }>Fire</button>
        <button value='Bug' onClick={ this.typeFilter }>Bug</button>
        <button value='Poison' onClick={ this.typeFilter }>Poison</button>
        <button value='Psychic' onClick={ this.typeFilter }>Psychic</button>
        <button value='Normal' onClick={ this.typeFilter }>Normal</button>
        <button value='Dragon' onClick={ this.typeFilter }>Dragon</button>
        </div>
          {pokemons.filter((element) => this.state.type === element.type).map((pokemons) => <Pokemon key={pokemons.id} pokemon={pokemons} />)}
      </div>
    )
  }
}

export default Pokedex;

