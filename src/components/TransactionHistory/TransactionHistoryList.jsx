import RenderTransaction from "./TransactionHistoryItem";
const RenderTransactionList = ({ transactions }) => {
  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        <RenderTransaction transactions={transactions} />
      </tbody>
    </table>
  );
};
export default RenderTransactionList;
