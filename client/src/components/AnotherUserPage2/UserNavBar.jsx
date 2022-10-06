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
        <li><button onClick={() => setPageComp('userWishes')}>Желания</button></li>
        <li><button onClick={() => setPageComp('wishesForUser')}>Подарки пользователю</button></li>
        <li><button onClick={() => setPageComp('wishesFromUser')}>Подарки от пользователя</button></li>
      </ul>
    </nav>
  );
}
