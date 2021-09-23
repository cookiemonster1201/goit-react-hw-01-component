import PropTypes from 'prop-types';
import s from 'components/Profile/Profile.module.css';
import defaultImage from 'components/Profile/default-cat.png';

export default function Profile({
  avatar = defaultImage,
  name,
  tag,
  location,
  stats,
}) {
  return (
    <div className={s.card}>
      <div className={s.userInfo}>
        <img src={avatar} alt="Аватар пользователя" className={s.userAvatar} />
        <p className={s.userName}>{name}</p>
        <p className={s.userTag}>@{tag}</p>
        <p className={s.userLocation}>{location}</p>
      </div>

      <ul className={s.userStats}>
        <li className={s.statItem}>
          <span className={s.statLabel}>Followers</span>
          <span className={s.statData}>{stats.followers}</span>
        </li>
        <li className={s.statItem}>
          <span className={s.statLabel}>Views</span>
          <span className={s.statData}>{stats.views}</span>
        </li>
        <li className={s.statItem}>
          <span className={s.statLabel}>Likes</span>
          <span className={s.statData}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number).isRequired,
};
