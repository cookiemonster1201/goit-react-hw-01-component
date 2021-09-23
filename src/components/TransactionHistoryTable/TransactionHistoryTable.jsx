import PropTypes from 'prop-types';
import s from 'components/TransactionHistoryTable/TransactionHistoryTable.module.css';
import TransactionHistoryHead from 'components/TransactionHistoryHead/TransactionHistoryHead';
import TransactionHistoryRow from 'components/TransactionHistoryBodyRow/TransactionHistoryBodyRow';

export default function TransactionHistoryTable({ items }) {
  return (
    <table className={s.table}>
      <thead className={s.head}>
        <TransactionHistoryHead transaction={items[0]} />
      </thead>

      <tbody className={s.body}>
        {items.map((transaction, idx) => (
          <tr key={transaction.id} className={s.row}>
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
