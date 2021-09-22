export default function TransactionHistoryHead({ transaction }) {
  const tableHeadLabels = Object.keys(transaction);
  tableHeadLabels.splice(tableHeadLabels.indexOf('id'), 1);

  return (
    <tr>
      {tableHeadLabels.map((label, idx) => (
        <th key={idx}>{label}</th>
      ))}
    </tr>
  );
}
