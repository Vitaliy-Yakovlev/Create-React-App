import Painting from './Painting';
import PropTypes from 'prop-types';
import s from './Painting.module.css';

function PaintingList({ items }) {
  return (
    <ul className={s.item}>
      {items.map(item => (
        <li className={s.list} key={item.id}>
          <Painting
            imageUrl={item.url}
            title={item.title}
            authorName={item.author.tag}
            profileUrl={item.author.url}
            price={item.price}
            quantity={item.quantity}
          />
        </li>
      ))}
    </ul>
  );
}

PaintingList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};

export default PaintingList;
