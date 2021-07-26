import errorImage from '../error.jpg';
import s from './PokemonErrorView.module.css';

export default function PokemonErrorView({ message }) {
  return (
    <div role="alert">
      <img className={s.image} src={errorImage} width="240" alt="sabcat" />

      <p className={s.text}>{message}</p>
    </div>
  );
}
