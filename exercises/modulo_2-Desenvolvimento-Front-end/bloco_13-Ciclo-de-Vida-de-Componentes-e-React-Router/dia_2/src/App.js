import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

import pokemons from './data';
import Pokedex from './Pokedex';
import PokemonDetails from './PokemonDetails';
import About from './About';
import NotFound from './NotFound';

import './App.css';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <h1> Pokedex </h1>
      <Link className="links" to="/" >Home</Link>
      <Link className="links" to="/about">About</Link>
    </div>
      <Switch>
        <Route exact path="/pokemon/:id" component={ PokemonDetails } />
        <Route path="/about" component={ About } />
        <Route exact path="/" render={() => <Pokedex pokemons={ pokemons } />} />
        <Route path="/:notfound" component={ NotFound } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;