import s from './Statistics.module.css';

function randColor() {
  var r = Math.floor(Math.random() * 256),
    g = Math.floor(Math.random() * 256),
    b = Math.floor(Math.random() * 256);
  return '#' + r.toString(16) + g.toString(16) + b.toString(16);
}

function StatisticsList({ items }) {
  return (
    <ul className={s.statList}>
      {items.map(item => {
        return (
          <li
            className={s.item}
            key={item.id}
            style={{ backgroundColor: randColor() }}
          >
            <span className={s.label}>{item.label}</span>
            <span className={s.percentage}>{item.percentage}</span>
          </li>
        );
      })}
    </ul>
  );
}

export default StatisticsList;
