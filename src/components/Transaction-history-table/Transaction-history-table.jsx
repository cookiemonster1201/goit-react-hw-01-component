import PropTypes from 'prop-types';
import TransactionHistoryHead from '../Transaction-history-head/Transaction-history-head';
import TransactionHistoryRow from '../Transaction-history-row/Transaction-history-row';

export default function TransactionHistoryTable({ items }) {
  return (
    <table class="transaction-history">
      <thead>
        <TransactionHistoryHead transaction={items[0]} />
      </thead>

      <tbody>
        {items.map((transaction, idx) => (
          <tr key={idx}>
            <TransactionHistoryRow transaction={transaction} />
          </tr>
        ))}
      </tbody>
    </table>
  );
}

TransactionHistoryTable.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ),
};
