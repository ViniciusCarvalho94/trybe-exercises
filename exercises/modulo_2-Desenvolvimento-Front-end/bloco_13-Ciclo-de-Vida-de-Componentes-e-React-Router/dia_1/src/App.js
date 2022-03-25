import React from 'react';
import './App.css';

class RandomDogImage extends React.Component {
  constructor() {
    super()
    this.fetchDogImage = this.fetchDogImage.bind(this)
    this.loadStorage = this.loadStorage.bind(this)

    this.state = {
      loading: false,
      dogImage: '',
    }
  }

  loadStorage() {
    const lastDog = localStorage.getItem('lastDog')
    lastDog === null 
    ? this.fetchDogImage() 
    : this.setState({ dogImage: lastDog })
  }

  async fetchDogImage () {
    this.setState(
      { loading: true },
      async () => {
        const fetchAPI = await fetch('https://dog.ceo/api/breeds/image/random');
        const jsonAPI = await fetchAPI.json()
        localStorage.setItem('lastDog', jsonAPI.message)

        this.setState({
          loading: false,
          dogImage: jsonAPI.message,
        });
      },
    );
  }

  componentDidMount() {
    this.loadStorage()
  }

  shouldComponentUpdate(_nextProps, nextState) {
    return nextState.dogImage.includes('terrier') ? false : true;
  }

  render() {
    const { dogImage } = this.state;
    return (
      <div>
        { dogImage === '' 
          ? <p>Loading...</p> 
          : <img src={ dogImage } alt='Cachorrinho fofinho' />
        }
        <button type="button" onClick={ this.fetchDogImage }> Próximo Doguinho </button>
      </div>
    )
  }
}

function App() {
  return (
    <RandomDogImage />
  );
}

export default App;
