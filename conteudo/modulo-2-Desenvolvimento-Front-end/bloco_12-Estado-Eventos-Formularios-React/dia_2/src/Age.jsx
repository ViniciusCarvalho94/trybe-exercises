import React from 'react';

export default class Age extends React.Component {
  render() {
    const { value, age } = this.props
    let error = undefined
    if (value < 0 || value > 100) error = 'Digite um número entre 0-100'

    return(
    <label>
      Idade:
      <input type="number" name="age" value={value} onChange={age} />
      <span>{error ? error : ''}</span>
    </label>
    )
  }

}