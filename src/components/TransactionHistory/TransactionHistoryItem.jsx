import s from './TransactionHistory.module.css';
import PropTypes from 'prop-types';
const RenderTransaction = ({ transactions }) => {
  return (
    <>
      {transactions.map((el) => {
        return (
          <tr className={s.tr} key={el.id}>
            <td className={s.td1}>{el.type}</td>
            <td className={s.td}> {el.amount}</td>
            <td className={s.td}> {el.currency}</td>
          </tr>
        );
      })}
    </>
  );
};
RenderTransaction.propTypes = {transactions: PropTypes.arrayOf(
  PropTypes.shape(
   { id: PropTypes.string.isRequired,
    type:PropTypes.string.isRequired,
    amount:PropTypes.string.isRequired,
    currency:PropTypes.string.isRequired
  }

  )
)}
export default RenderTransaction;
