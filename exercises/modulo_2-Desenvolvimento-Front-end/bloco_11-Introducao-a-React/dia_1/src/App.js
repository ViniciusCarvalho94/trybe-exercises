import React from 'react';
import './App.css';

const tasks = [
  'Terminar o Bloco 11',
  'Continuar ontrack',
  'Não deixar conteudos para trás'
]

const Task = (value) => {
  return (
    value.map((element) => <h1>{element} </h1>)
  );
}

function App() {
  return (
    Task(tasks)
  );
}

export default App;
