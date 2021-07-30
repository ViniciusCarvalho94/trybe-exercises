import React from 'react';
import './App.css';

class Button extends React.Component {
  constructor() {
    super()
    this.button1 = this.button1.bind(this)
    console.log(`${this} << isso é o this no constructor`)
    this.state = {
      click2: 0,
      click4: 0,
    }
  }

  button1() {
    console.log(this)
    console.log('cliquei no botão 1 e o this está sendo acessado por causa do constructor')
  }

  
  button2 = () => {
    this.setState((beforeClick, _props) => ({
      click2: beforeClick.click2 + 1
    }))
    console.log('cliquei no botão 2 e o this.state foi incrementado em 1')
    console.log(this)
  }

  button3 = (para) => {
    console.log(para)
  }

  button4 = () => {
    this.setState((beforeClick, _props) => ({
      click4: beforeClick.click4 + 1
    }))
    console.log(this)
  }
  render() {
    let className = '';
    if(this.state.click4 % 2 === 0) {
      className = 'par'
      console.log('Par')
    } else {
      className = 'impar'
      console.log('Impar')
    };
    return(
      <div>
        <button type="button" onClick={this.button1}>Botão 1</button>
        <button type="button" onClick={this.button2}>{this.state.click2}</button>
        <button type="button" onClick={() => this.button3('cliquei no botão 3')}>Botão 3</button>
        <button type="button" className={className} onClick={this.button4}>{this.state.click4}</button>
      </div>
    )
  }
}

export default Button;
