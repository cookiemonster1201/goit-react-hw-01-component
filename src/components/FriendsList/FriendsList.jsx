import PropTypes from 'prop-types';
import s from 'components/FriendsList/FriendsList.module.css';
import FriendsListItem from 'components/FriendsListItem/FriendsListItem';

export default function FriendsList({ friends }) {
  return (
    <ul className={s.list}>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <li key={id} className={s.listItem}>
          <FriendsListItem avatar={avatar} name={name} isOnline={isOnline} />
        </li>
      ))}
    </ul>
  );
}

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }),
  ),
};
