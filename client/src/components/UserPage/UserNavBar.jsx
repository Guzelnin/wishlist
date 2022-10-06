import React from 'react';

export default function UserNavBar({ setPageComp }) {
  return (
    <nav>
      <ul style={{
        display: 'flex',
        justifyContent: 'space-around',
        listStyleType: 'none',
        margin: '0',
        padding: '0',
      }}
      >
        <li><button onClick={() => setPageComp('myWishes')}>Мои желания</button></li>
        <li><button onClick={() => setPageComp('friendsWishes')}>Желания друзей</button></li>
        <li><button onClick={() => setPageComp('giftsForMe')}>Подарки мне</button></li>
        <li><button onClick={() => setPageComp('giftsFromMe')}>Подарки от меня</button></li>
      </ul>
    </nav>
  );
}
