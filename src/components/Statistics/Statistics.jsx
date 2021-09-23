import PropTypes from 'prop-types';
import s from 'components/Statistics/Statistics.module.css';
import StatItem from 'components/StatsItem/StatsItem';

export default function Statistics({ title, stats }) {
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{title}</h2>}
      <ul className={s.list}>
        {stats.map(({ id, label, percentage }) => {
          let randomColor = Math.floor(Math.random() * 16777215).toString(16);

          return (
            <li
              key={id}
              className={s.item}
              style={{ backgroundColor: `#${randomColor}` }}
            >
              <StatItem label={label} percentage={percentage} />
            </li>
          );
        })}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};
