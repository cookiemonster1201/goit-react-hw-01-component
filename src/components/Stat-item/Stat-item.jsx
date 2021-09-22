export default function StatItem({ label, percentage }) {
  return (
    <>
      <span class="label">{label}</span>
      <span class="percentage">{percentage}%</span>
    </>
  );
}
