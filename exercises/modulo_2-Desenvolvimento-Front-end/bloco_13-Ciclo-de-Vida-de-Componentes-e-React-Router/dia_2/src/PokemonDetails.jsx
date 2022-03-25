import React from 'react';
import { withRouter } from 'react-router';
import { Redirect } from 'react-router-dom';

import data from './data'
import Pokemon from './Pokemon';

import './pokemonDetails.css'

export default withRouter(class PokemonDetails extends React.Component {
  render() {
    const id = parseInt(this.props.match.params.id)
    const pokemon = data.find((pok) => pok.id === id)
    if (pokemon === undefined) {
     return <Redirect to='/notfound' />
    }
      const mapsPokemon = pokemon.foundAt.map((pok) => 
      <div key={pok.location}>
        <p>{pok.location}</p>
        <img src={pok.map} alt={pok.location} />
      </div>
    )
    return (
      <div className="moreDetails">
        <h3>{`${pokemon.name} Details`}</h3>
        <div className="pokemonCard">
          <Pokemon className="pokemon" pokemon={ pokemon } moreDetails={false} />
        </div>
        <h3>Summary</h3>
        { pokemon.summary }
        <h3>Game Locations of Ekans</h3>
        <div className="maps">
          { mapsPokemon }
        </div>
      </div>
    )
  }
})