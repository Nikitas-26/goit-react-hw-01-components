import './App.css';
import Profile from './components/Profile.jsx'
import Statistics from './components/Statistics/Statistics.jsx'
import user from './data/user.json'
import data from './components/Statistics/data.json'
import FriendList from './components/FriendList/FriendList'
import friends from './components/FriendList/friends.json'
import transactions  from './components/TransactionHistory/transactions.json'
import RenderTransactionList from './components/TransactionHistory/TransactionHistoryList.jsx'
// console.log(transactions);
function App() {
  return (
    <>
    <Profile
    username={user.username}
    tag={user.tag}
    location={user.location}
    avatar={user.avatar}
   stats={user.stats}
   
/>
<>
<Statistics 
  label='Upload Stats'
  percentage={data}
/>
</>
<>
<FriendList
friends={friends}
/>
</>
<RenderTransactionList
transactions={transactions}
/>
    </>
  );
}

export default App;
