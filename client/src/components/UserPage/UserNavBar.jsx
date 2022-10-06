import React from 'react';

export default function UserNavBar({ setPageComp }) {
  return (

    <div className="multi-button">
      <button onClick={() => setPageComp('myWishes')} className="navbtn">
        <i className="fas fa-cut" />
        {' '}
        Мои желания
      </button>
      <button onClick={() => setPageComp('friendsWishes')} className="navbtn">
        <i className="fas fa-copy" />
        {' '}
        Желания друзей
      </button>
      <button onClick={() => setPageComp('giftsForMe')} className="navbtn">
        <i className="fas fa-copy" />
        {' '}
        Подарки мне
      </button>
      <button onClick={() => setPageComp('giftsFromMe')} className="navbtn">
        <i className="fas fa-paste" />
        {' '}
        Подарки от меня
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
        
  //     <li><button onClick={() => setPageComp('myWishes')}>Мои желания</button></li>
  //     <li><button onClick={() => setPageComp('friendsWishes')}>Желания друзей</button></li>
  //     <li><button onClick={() => setPageComp('giftsForMe')}>Подарки мне</button></li>
  //     <li><button onClick={() => setPageComp('giftsFromMe')}>Подарки от меня</button></li>
  //   </ul>
  // </nav>
  );
}
