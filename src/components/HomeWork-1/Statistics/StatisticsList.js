// function randColor() {
//   var r = Math.floor(Math.random() * 256),
//     g = Math.floor(Math.random() * 256),
//     b = Math.floor(Math.random() * 256);
//   return '#' + r.toString(16) + g.toString(16) + b.toString(16);
// }

function StatisticsList({ items }) {
  return (
    <ul className="stat-list">
      {items.map(item => {
        return (
          <li className="item" key={item.id}>
            <span className="label">{item.label}</span>
            <span className="percentage">{item.percentage}</span>
          </li>
        );
      })}
    </ul>
  );
}

export default StatisticsList;
