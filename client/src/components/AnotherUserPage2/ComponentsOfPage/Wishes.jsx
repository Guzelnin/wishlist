import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAnotherUserWishesAsync } from '../../../redux/actions/anotherUserWishesActions';
import { addWishesFromMe, addWishesFromMeAsync } from '../../../redux/actions/wishesFromMeActions';
import WishesCard from './WishesCard';

export default function Wishes({ wishes, userId }) {
  const dispatch = useDispatch();
  return (
    <div className="home_bottom_all">
      <div className="cards">
        {wishes && wishes.length !== 0 && wishes?.map((el) => (
          <WishesCard key={el.id} wish={el} userId={userId} />
        ))}
      </div>
    </div>
  );
}
