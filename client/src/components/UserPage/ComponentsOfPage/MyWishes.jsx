import * as React from 'react';
import WishCard from './WishCard';

export default function MyWishes({ myWishes }) {
  // console.log('myWishes', myWishes);
  return (
    <div className="home_bottom_all">
      <div className="cards">
        {myWishes && myWishes.length !== 0 && myWishes?.map((el) => (
          <WishCard key={el.id} wish={el} />
        ))}
      </div>
    </div>
  );
}
