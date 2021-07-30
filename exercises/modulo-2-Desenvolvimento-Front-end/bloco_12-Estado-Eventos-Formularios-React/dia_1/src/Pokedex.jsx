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
      return this.setState((beforeClick) => (
        {
        index: beforeClick.index = 0,
        type: '',
        }
      ))
    } return this.setState((beforeClick) => ({
      index: beforeClick.index + 1,
      type: '',
    }))
  }

  typeFilter(event) {
    this.setState(
      { 
        index: -1,
        type: event.target.value,
      }
    )
  }
  
  render() {
    return(
      <div>
        <div>
        <button className="electric" value='Electric' onClick={ this.typeFilter }>Eletric</button>
        <button className="fire" value='Fire' onClick={ this.typeFilter }>Fire</button>
        <button className="bug" value='Bug' onClick={ this.typeFilter }>Bug</button>
        <button className="poison" value='Poison' onClick={ this.typeFilter }>Poison</button>
        <button className="psychic" value='Psychic' onClick={ this.typeFilter }>Psychic</button>
        <button className="normal" value='Normal' onClick={ this.typeFilter }>Normal</button>
        <button className="dragon" value='Dragon' onClick={ this.typeFilter }>Dragon</button>
        </div>
          <button className='next' onClick={this.addIndex}>Next Pokémon</button>
        <div>
          { this.state.index === -1 ? <span />
            : <Pokemon key={pokemons[this.state.index].id} pokemon={pokemons[this.state.index]} />  
          }
        </div>
          {pokemons.filter((element) => this.state.type === element.type)
            .map((pokemons) => <Pokemon key={pokemons.id} pokemon={pokemons} />)}
      </div>
    )
  }
}

export default Pokedex;

