function FriendListItem({ avatar, name, isOoline }) {
  return (
    <li className="item">
      <span className={isOoline ? 'online' : 'ofline'}></span>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </li>
  );
}

export default FriendListItem;
