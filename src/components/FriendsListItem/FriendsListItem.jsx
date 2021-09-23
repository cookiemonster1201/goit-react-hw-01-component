import s from 'components/FriendsListItem/FriendsListItem.module.css';
import defaultAvatar from 'components/FriendsListItem/images.png';

export default function FriendsListItem({
  avatar = defaultAvatar,
  name,
  isOnline,
}) {
  return (
    <>
      <span className={isOnline ? s.online : s.offline}></span>
      <img className={s.userImg} src={avatar} alt={name} width="48" />
      <p className={s.userName}>{name}</p>
    </>
  );
}
