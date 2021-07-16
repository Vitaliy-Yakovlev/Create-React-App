import PropTypes from 'prop-types';
import defaultImages from './default.jpg';

const Painting = ({
  imageUrl = defaultImages,
  title,
  profileUrl,
  authorName,
  price,
  quantity,
}) => (
  <div>
    <img src={imageUrl ?? defaultImages} alt={title} width="480" />
    <h2>{title}</h2>
    <p>
      Автор: <a href={profileUrl}>{authorName}</a>
    </p>
    <p>Цена:{price} кредитов</p>

    <p>Доступность: {quantity < 10 ? 'Доступно' : 'Заканчиваются'}</p>
    <button type="button">Добавить в корзину</button>
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