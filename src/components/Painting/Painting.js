import PropTypes from 'prop-types';
import defaultImages from './default.jpg';
import s from './Painting.module.css';

const Painting = ({
  imageUrl = defaultImages,
  title,
  profileUrl,
  authorName,
  price,
  quantity,
}) => (
  <div className={s.container}>
    <img src={imageUrl ?? defaultImages} alt={title} width="480" />
    <h2 className={s.title}>{title}</h2>
    <p className={s.text}>
      Автор: <a href={profileUrl}>{authorName}</a>
    </p>
    <p className={s.text}>Цена:{price} кредитов</p>

    <p className={s.text}>
      Доступность: {quantity < 10 ? 'Доступно' : 'Заканчиваются'}
    </p>
    <button type="button" className={s.btn}>
      Добавить в корзину
    </button>
  </div>
);

Painting.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  profileUrl: PropTypes.string.isRequired,
  authorName: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
};

export default Painting;
