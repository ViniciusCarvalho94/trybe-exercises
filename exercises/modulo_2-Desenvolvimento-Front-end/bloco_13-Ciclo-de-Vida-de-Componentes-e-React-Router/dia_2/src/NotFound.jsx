import React from 'react';

import './notFound.css'

export default class NotFound extends React.Component {
  render() {
    return (
      <div>
        <h3>Page request not found</h3>
        <img className="sadPikachu" src="https://i.imgur.com/9E02WWx.jpeg" alt="Sad Pikachu" />
      </div>
    )
  }
}