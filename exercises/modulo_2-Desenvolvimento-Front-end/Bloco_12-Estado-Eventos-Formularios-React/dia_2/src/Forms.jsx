import React from 'react';

export default class Forms extends React.Component {
  constructor() {
    super()
    this.handleChange = this.handleChange.bind(this)
    this.handleEraseForm = this.handleEraseForm.bind(this)

    this.state = {
      name: '',
      email: '',
      cpf: '',
      street: '',
      city: '',
      state: '',
      typeHouse: '',
      formsWithErrors: true
    }
  }

  handleEraseForm() {
    this.setState({
      name: '',
      email: '',
      cpf: '',
      street: '',
      city: '',
      state: ''
    }, () => { this.handleError(); })
  }

  handleError() {
    const { name, email, cpf, street, city, state, typeHouse } = this.state

    const errorCases = [
      !name.length || name.length > 40,
      !email.length || email.length > 50,
      !cpf.length || cpf.length > 14,
      !street.length || street.length > 200,
      !city.length || city.length > 28,
      !state || state === 'Select',
      !typeHouse
    ];

    const formsWithErrors = errorCases.every((error) => error !== true);

    this.setState({
      formsWithErrors: !formsWithErrors,
    });
  }

  handleChange({ target }) {
    const { name, value } = target

    this.setState({ [name]: value }, () => { this.handleError(); })
  }

  render() {
    const { name, email, cpf, street, city, formsWithErrors } = this.state
    return(
      <div>
      <form>
        Formulário
        <fieldset>
          <label>
            Nome:
            <input type="text" name="name" value={name} onChange={this.handleChange}/>
          </label>

          <label>
            Email:
            <input type="email" name="email" value={email} onChange={this.handleChange} />
          </label>

          <label>
            CPF:
            <input type="text" name="cpf" value={cpf} onChange={this.handleChange} />
          </label>

          <label>
            Endereço:
            <input type="text" name="street" value={street} onChange={this.handleChange} />
          </label>

          <label>
            Cidade:
            <input type="text" name="city" value={city} onChange={this.handleChange} />
          </label>

          <label>
            Estado:
            <select name="state" onChange={this.handleChange}>
              <option value="Select">Selecione um estado</option>
              <optgroup label="Norte">
                <option value="AC">Acre</option>
                <option value="AP">Amapá</option>
                <option value="AM">Amazonas</option>
                <option value="PA">Pará</option>
                <option value="RO">Rondônia</option>
                <option value="RR">Roraima</option>
                <option value="TO">Tocantins</option>
              </optgroup>
              
              <optgroup label="Nordeste">
                <option value="AL">Alagoas</option>
                <option value="BA">Bahia</option>
                <option value="CE">Ceará</option>
                <option value="MA">Maranhão</option>
                <option value="PB">Paraíba</option>
                <option value="PE">Pernambuco</option>
                <option value="PI">Piauí</option>
                <option value="SE">Sergipe</option>
              </optgroup>
              
              <optgroup label="Centro-Oeste">
                <option value="DF">Distrito Federal</option>
                <option value="GO">Goiás</option>
                <option value="MT">Mato Grosso</option>
                <option value="MS">Mato Grosso do Sul</option>
              </optgroup>
              
              <optgroup label="Sudeste">
                <option value="ES">Espírito Santo</option>
                <option value="MG">Minas Gerais</option>
                <option value="RJ">Rio de Janeiro</option>
                <option value="SP">São Paulo</option>
              </optgroup>
              
              <optgroup label="Sul">
                <option value="PR">Paraná</option>
                <option value="RN">Rio Grande do Norte</option>
                <option value="RS">Rio Grande do Sul</option>                          
                <option value="SC">Santa Catarina</option>
              </optgroup>
            </select>
          </label>
          
          <label>
            Tipo de casa:
            <label>
              Casa
              <input type="radio" name="typeHouse" value="house" onChange={this.handleChange}></input>
            </label>

            <label className="radio">
              Apartamento
              <input type="radio" name="typeHouse" value="apartment" onChange={this.handleChange}></input>
            </label>
          </label>
        </fieldset>
      </form>
      <button onClick={this.handleEraseForm}>Limpar Formulário</button>
      { formsWithErrors
          ? <span style={{ color: 'red' }}>Preencha todos os campos</span>
          : <span style={{ color: 'green' }}>Todos campos foram preenchidos</span> 
      }
    </div>
    )
  }
}