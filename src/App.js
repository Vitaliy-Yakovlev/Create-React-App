//Class Work========================================================================================
import React from 'react';
import PaintingList from './components/Painting/PaintingList';
import Section from './components/Section/Section';
//Home Work #1======================================================================================
import Profile from './components/HomeWork-1/Profile/Profile';
import Statistics from './components/HomeWork-1/Statistics/Statistics';
import FriendList from './components/HomeWork-1/FriendList/FriendList';
import TransactionHistory from './components/HomeWork-1/TransactionHistory/TransactionHistory';
//Class Work=========================================================================================
import paintings from './components/Painting/paintings.json';
//Home Work #1=======================================================================================
import user from './components/HomeWork-1/Profile/user.json';
import statisticalData from './components/HomeWork-1/Statistics/statistical-data.json';
import friends from './components/HomeWork-1/FriendList/friends.json';
import transactions from './components/HomeWork-1/TransactionHistory/transactions.json';

function App() {
  return (
    <>
      <Section title="Топ недели">
        <PaintingList items={paintings} />;
      </Section>
      <Section title="Good" />
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />;
      <Statistics stats={statisticalData} />;
      <FriendList friends={friends} />,
      <TransactionHistory items={transactions} />;
    </>
  );
}

export default App;
