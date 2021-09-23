export default function TransactionHistoryRow({ transaction }) {
  const data = Object.values(transaction);
  data.splice(data.indexOf(transaction.id), 1);

  return (
    <>
      {data.map(value => (
        <td key={value}>{value}</td>
      ))}
    </>
  );
}
