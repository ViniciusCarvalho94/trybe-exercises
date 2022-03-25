import React from 'react';

import Age from './Age';
import City from './FormCity'
import Terms from './Terms';

class Forms extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      name: '',
      age: '',
      email: '',
      city: '',
      terms: false,
      formsWithErrors: true,
    };
  }

  handleError() {
    const { name, age, email, city, terms } = this.state;

    const errorCases = [
      !name.length || name.length > 100,
      !email.length || email.length > 100,
      !age.length || age < 0 || age > 100,
      !city.length || city === 'Select',
      !terms,
    ];

    const formsWithErrors = errorCases.every((error) => error !== true);

    this.setState({
      formsWithErrors: !formsWithErrors,
    });
  }

  handleChange({ target }) {
    const { name } = target
    const value = target.type === 'checkbox' ? target.checked : target.value
    
    this.setState({
      [name]: value
    }, () => { this.handleError(); })
  };

  render() {
    const { name, age, email, city, terms, formsWithErrors } = this.state

    return (
      <div>
        <h1>Forms brabo</h1>
        <form className="form">
          <fieldset>
            <label>
              Nome:
              <input type="text" name="name" value={name} onChange={this.handleChange} />
            </label>

            <Age value={age} age={this.handleChange} />

            <label>
              Email:
              <input type="email" name="email" value={email} onChange={this.handleChange} />
            </label>

            <City value={city} city={this.handleChange} />
          </fieldset>

          <Terms value={terms} terms={this.handleChange} />

          <label>
            <input type="file" />
          </label>
        </form>
        { formsWithErrors
          ? <span style={ { color: 'red' } }>Preencha todos os campos</span>
          : <span style={ { color: 'green' } }>Todos campos foram preenchidos</span> 
        }
      </div>
    )
  }
}

export default Forms;