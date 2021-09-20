import Profile from './components/social-profile/Profile';
import Statistics from './components/statistics/Statistics';
import FriendListItem from './components/friend-list/FriendListItem';
import FriendList from './components/friend-list/FriendList';
import TransactionHistory from './components/transaction-history/TransactionHistory';

import userInfo from './user.json';
import statisticalData from './statistical-data.json';
import friends from './friends.json';
import transactions from './transactions.json';

export default function App() {
    return <div>
       <Profile
        name={userInfo.name}
        tag={userInfo.tag}
        location={userInfo.location}
        avatar={userInfo.avatar}
        stats={userInfo.stats}
        />
        <Statistics stats={statisticalData} />
        <FriendList>
          {friends.map(friend => (
          <FriendListItem
            key={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
            id={friend.id}
          />
        ))}
        </FriendList>
        <TransactionHistory items={transactions} />;
    </div>;

}