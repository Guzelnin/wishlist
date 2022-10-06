import React from 'react';

export default function From({ wishes }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '50px' }}>
      {wishes && wishes.length !== 0 && wishes?.map((el) => (
        <div key={el.id}>
          <img src={process.env.REACT_APP_BASEURL + el.Owner.Wish.photo} height="100px" alt="myWish" />
          <h6>{el?.Owner?.Wish?.name}</h6>
          <p>Подарок для:</p>
          <p>{el?.Owner?.User?.name}</p>
        </div>
      ))}
    </div>
  );
}
