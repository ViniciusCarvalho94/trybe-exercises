import React from 'react';

class City extends React.Component {
  render() {
    const { city, value } = this.props;

    let error = undefined
    if (value === 'Select') error = 'Selecione uma cidade valida'
    
    return (
      <label>
      Cidade:
      <select name="city" onChange={city}>
        <option value="Select">Selecione um cidade</option>
        <option value="São Paulo">São Paulo</option>
        <option value="Belo Horizonte">Belo Horizonte</option>
        <option value="Rio de Janeiro">Rio de Janeiro</option>
      </select>
      <span>{error ? error : ''}</span>
    </label>
    )
  }
}

export default City;