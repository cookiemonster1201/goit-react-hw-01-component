import Container from 'components/Container/Container';
import Profile from 'components/Profile/Profile';
import Statistics from 'components/Statistics/Statistics';
import FriendsList from 'components/FriendsList/FriendsList';
import TransactionHistoryTable from 'components/TransactionHistoryTable/TransactionHistoryTable';
import user from 'user.json';
import statisticalData from 'statistical-data.json';
import friends from 'friends.json';
import transactions from 'transactions.json';

export default function App() {
  return (
    <Container>
      <Profile
        avatar={user.avatar}
        name={user.name}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={statisticalData} />

      <FriendsList friends={friends} />

      <TransactionHistoryTable items={transactions} />
    </Container>
  );
}
