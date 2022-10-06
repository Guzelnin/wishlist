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
  );
}
