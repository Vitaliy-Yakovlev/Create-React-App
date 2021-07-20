import pendingImage from '../pending.png';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';
import PokemonDataView from '../PokemonDataView';

export default function PokemonPendingView({ pokemonName }) {
  const pokemon = {
    name: pokemonName,
    sprites: {
      other: {
        'official-artwork': {
          front_default: pendingImage,
        },
      },
    },
    stats: [],
  };

  return (
    <div role="alert">
      <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />
      Загружаю....
      <PokemonDataView pokemon={pokemon} />
    </div>
  );
}
