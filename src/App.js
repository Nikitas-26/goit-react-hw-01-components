import "./App.css";
import Profile from "./components/Profile/Profile.jsx";
import Statistics from "./components/Statistics/Statistics.jsx";
import user from "./data/user.json";
import data from "./data/data.json";
import FriendList from "./components/FriendList/FriendList";
import friends from "./data/friends.json";
import transactions from "./data/transactions.json";
import RenderTransactionList from "./components/TransactionHistory/TransactionHistoryList.jsx";
function App() {
  return (
    <>
      <Profile username={user.username} tag={user.tag} location={user.location} avatar={user.avatar} stats={user.stats} />
      <>
        <Statistics label="Upload Stats" percentage={data} />
      </>
      <>
        <FriendList friends={friends} />
      </>
      <RenderTransactionList transactions={transactions} />
    </>
  );
}
export default App;
