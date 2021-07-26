import s from './PokemonDataView.module.css';

export default function PokemonDataView({ pokemon: { sprites, name, stats } }) {
  return (
    <div className={s.container}>
      <img
        className={s.image}
        src={sprites.other['official-artwork'].front_default}
        width="240"
        height="100"
        alt={name}
      />
      <h2 className={s.title}>{name}</h2>

      <ul className={s.list}>
        {stats.map(entry => (
          <li className={s.item} key={entry.stat.name}>
            {entry.stat.name}: {entry.base_stat}
          </li>
        ))}
      </ul>
    </div>
  );
}
