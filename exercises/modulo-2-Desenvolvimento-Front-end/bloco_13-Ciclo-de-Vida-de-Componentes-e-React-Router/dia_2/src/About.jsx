import React from 'react';

import './about.css'

export default class About extends React.Component {
  render() {
    return (
      <div>
        <h3>About Pokédex</h3>
        <p>This application simulates a Pokédex, a digital encyclopedia containing all Pokémons.</p>
        <p>One can filter Pokémons by type, and see more details for each one of them.</p>
        <img className="imgPokedex" src="https://i.imgur.com/oioCLoN.png" alt="Pokédex"></img>
      </div>
    )
  }
}