import s from './FriendList.module.css';

function FriendListItem({ avatar, name, isOoline }) {
  return (
    <li className={s.item}>
      <span className={isOoline ? s.online : s.ofline}></span>
      <img className={s.avatar} src={avatar} alt={name} width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
}

export default FriendListItem;
