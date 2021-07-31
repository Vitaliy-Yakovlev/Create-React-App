import { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import s from './PokemonForm.module.css';

export default function PokemonForm({ onSubmit }) {
  const [pokemonName, setPokemonName] = useState('');

  const handleNameChange = e => {
    setPokemonName(e.currentTarget.value.toLocaleLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (pokemonName.trim() === '') {
      toast.error('Введите имя для покемона');
      return;
    }

    onSubmit(pokemonName);
    setPokemonName('');
  };

  return (
    <form onSubmit={handleSubmit} className={s.from}>
      <input
        className={s.input}
        type="text"
        name="pokemonName"
        value={pokemonName}
        onChange={handleNameChange}
      />
      <button type="submit" className={s.btn}>
        <BsSearch style={{ marginRight: 8 }} />
        Найти
      </button>
    </form>
  );
}

// export default class PokemonForm extends Component {
//   state = {
//     pokemonName: '',
//   };

//   handleNameChange = e => {
//     this.setState({ pokemonName: e.currentTarget.value.toLocaleLowerCase() });
//   };

//   handleSubmit = e => {
//     e.preventDefault();

//     if (this.state.pokemonName.trim() === '') {
//       toast.error('Введите имя для покемона');
//       return;
//     }

//     this.props.onSubmit(this.state.pokemonName);
//     this.setState({ pokemonName: '' });
//   };

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit} className={s.from}>
//         <input
//           className={s.input}
//           type="text"
//           name="pokemonName"
//           value={this.state.pokemonName}
//           onChange={this.handleNameChange}
//         />
//         <button type="submit" className={s.btn}>
//           <BsSearch style={{ marginRight: 8 }} />
//           Найти
//         </button>
//       </form>
//     );
//   }
// }
