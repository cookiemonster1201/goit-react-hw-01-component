export default function TransactionHistoryHead({ transaction }) {
  const tableHeadLabels = Object.keys(transaction);
  tableHeadLabels.splice(tableHeadLabels.indexOf('id'), 1);

  return (
    <tr>
      {tableHeadLabels.map(label => (
        <th key={label}>{label}</th>
      ))}
    </tr>
  );
}
