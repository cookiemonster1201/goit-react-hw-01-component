import s from 'components/StatsItem/StatsItem.module.css';

export default function StatItem({ label, percentage }) {
  return (
    <>
      <span className={s.label}>{label}</span>
      <span className={s.data}>{percentage}%</span>
    </>
  );
}
