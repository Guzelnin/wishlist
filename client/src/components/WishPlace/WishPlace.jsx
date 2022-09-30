import React from 'react';
import OneWishCard from '../OneWishCard';

export default function WishPlace() {
  return (
    <div className="row">
      <div className="col">
        <OneWishCard />
        {
      // myWish && myWish?.map((el) => (
      //   <MyWishCard
      //     myWish={el}
      //     key={el.id}
      //     id={el.id}
      //   />
      // ))
  }
      </div>
    </div>
  );
}
