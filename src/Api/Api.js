import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PokemonForm from './PokemonForm';
import PokemonInfo from './PokemonInfo';

class Api extends Component {
  state = {
    pokemonName: '',
  };

  handleFormSubmit = pokemonName => {
    this.setState({ pokemonName });
  };

  render() {
    return (
      <div>
        <PokemonForm onSubmit={this.handleFormSubmit} />
        <PokemonInfo pokemonName={this.state.pokemonName} />
        <ToastContainer autoClose={5000} />
      </div>
    );
  }
}

export default Api;

//Пример простой))=>

// class Api extends Component {
//   state = {
//     pokemon: null,
//     loading: false,
//   };

//   componentDidMount() {
//     this.setState({ loading: true });

//     fetch('https://pokeapi.co/api/v2/pokemon/ditto')
//       .then(res => res.json().then(pokemon => this.setState({ pokemon })))
//       .finally(() => this.setState({ loading: false }));
//   }

//   render() {
//     return (
//       <div>
//         {/* <ToastComponent autoClose={3000} /> */}
//         {this.state.loading && <h1>Загружаем...</h1>}
//         {this.state.pokemon && <div>{this.state.pokemon.name}</div>}
//       </div>
//     );
//   }
// }
