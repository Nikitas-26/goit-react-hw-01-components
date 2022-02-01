import RenderTransaction from "./TransactionHistoryItem";
import PropTypes from 'prop-types';
import s from './TransactionHistory.module.css';
const RenderTransactionList = ({ transactions }) => {
  return (
    <table className={s.transactionHistory}>
      <thead className={s.thead}>
        <tr className={s.trStats}>
          <th className={s.stats}>Type</th>
          <th className={s.stats}>Amount</th>
          <th className={s.stats}>Currency</th>
        </tr>
      </thead>
      <tbody>
        <RenderTransaction transactions={transactions} />
      </tbody>
    </table>
  );
};
RenderTransactionList.propTypes = {transactions: PropTypes.arrayOf(
  PropTypes.shape(
   { id: PropTypes.string.isRequired,
    type:PropTypes.string.isRequired,
    amount:PropTypes.string.isRequired,
    currency:PropTypes.string.isRequired
  }
  )
)}
export default RenderTransactionList;
