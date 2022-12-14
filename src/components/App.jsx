import transactions from 'transactions.json';
import friends from 'friends.json';
import user from 'user.json';
import data from 'data.json';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';

import { FriendList } from './FriendList/FriendList';
import { TransitionHistory } from './TransactionHistory/TransactionHistory';
import { BackGround } from './Profile/Profile.styled';

export const App = () => {
  return (
    <div
      style={{
        // height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        // fontSize: 40,
        // color: '#010101',
      }}
    >
      <BackGround>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </BackGround>
      <BackGround>
        <Statistics title="Upload stats" stats={data} />
        <Statistics stats={data} />
      </BackGround>

      <FriendList friends={friends} />
      <TransitionHistory items={transactions} />
    </div>
  );
};
