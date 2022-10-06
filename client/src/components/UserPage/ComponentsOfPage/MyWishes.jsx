import * as React from 'react';
import WishCard from './WishCard';

export default function MyWishes({ myWishes }) {
  console.log(myWishes);
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '50px' }}>
      {myWishes && myWishes.length !== 0 && myWishes?.map((el) => (
        <WishCard key={el.id} wish={el} />
      ))}
    </div>
  );
}
