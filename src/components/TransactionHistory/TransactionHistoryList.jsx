import TransactionHistoryItem from './TransactionHistoryItem'
// console.log(TransactionHistoryItem);
const RenderTransactionList = ({ transactions }) => {
    console.log(transactions);
  return (
    <table class="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
          <TransactionHistoryItem
          transactions = {transactions}
          />
      </tbody>
    </table>
  );
};
export default RenderTransactionList;
