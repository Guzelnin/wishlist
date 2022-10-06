import React from 'react';

export default function For({ wishes }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '50px' }}>
      {wishes && wishes.length !== 0 && wishes?.map((el) => (
        <div key={el.id}>
          <img src={process.env.REACT_APP_BASEURL + el.Owner.Wish.photo} height="100px" alt="myWish" />
          <h6>{el.Owner.Wish.name}</h6>
          <div> 
            <p>Подарок от:</p>
            <p>{el?.User?.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
