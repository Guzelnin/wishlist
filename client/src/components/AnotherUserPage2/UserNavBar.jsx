import React from 'react';

export default function UserNavBar({ setPageComp }) {
  return (

    <div className="multi-button" style={{ marginLeft: '6%' }}>
      <button onClick={() => setPageComp('userWishes')} className="navbtn">
        <i className="fas fa-cut" />
        {' '}
        Желания
      </button>
      <button onClick={() => setPageComp('wishesForUser')} className="navbtn">
        <i className="fas fa-copy" />
        {' '}
        Подарки пользователю
      </button>
      <button onClick={() => setPageComp('wishesFromUser')} className="navbtn">
        <i className="fas fa-paste" />
        {' '}
        Подарки от пользователя
      </button>
    </div>

  // <nav>
  //   <ul style={{
  //     display: 'flex',
  //     justifyContent: 'space-around',
  //     listStyleType: 'none',
  //     margin: '0',
  //     padding: '0',
  //   }}
  //   >
  //     <li><button onClick={() => setPageComp('userWishes')}>Желания</button></li>
  //     <li><button onClick={() => setPageComp('wishesForUser')}>Подарки пользователю</button></li>
  //     <li><button onClick={() => setPageComp('wishesFromUser')}>Подарки от пользователя</button></li>
  //   </ul>
  // </nav>
  );
}
