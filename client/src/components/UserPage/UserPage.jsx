import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UserDescription from './UserDescription';
import PageNavbar from './PageNavbar';
import UserNavBar from './UserNavBar';
import FriendsWishes from './ComponentsOfPage/FriendsWishes';
import MyWishes from './ComponentsOfPage/MyWishes';
import GiftsForMe from './ComponentsOfPage/GiftsForMe';
import GiftsFromMe from './ComponentsOfPage/GiftsFromMe';
import { getMyWishesAsync } from '../../redux/actions/myWishesAction';
import { getFriendsWishesIbookedAsync } from '../../redux/actions/friendsWishesIBookedActions';
import { getWishesForMeAsync } from '../../redux/actions/wishesForMeActions';
import { getWishesFromMeAsync } from '../../redux/actions/wishesFromMeActions';

export default function UserPage() {
  const myWishes = useSelector((state) => state.myWishes);
  const friendsWishesIBooked = useSelector((state) => state.friendsWishesIBooked);
  const wishesForMe = useSelector((state) => state.wishesForMe);
  const wishesFromMe = useSelector((state) => state.wishesFromMe);
  const [pageComp, setPageComp] = useState('myWishes');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMyWishesAsync());
    dispatch(getFriendsWishesIbookedAsync());
    dispatch(getWishesForMeAsync());
    dispatch(getWishesFromMeAsync());
  }, []);
  return (
    <div>
      <UserDescription />
      <UserNavBar setPageComp={setPageComp} />
      {pageComp === 'myWishes' && <MyWishes myWishes={myWishes} />}
      {pageComp === 'friendsWishes' && <FriendsWishes wishes={friendsWishesIBooked} />}
      {pageComp === 'giftsForMe' && <GiftsForMe wishes={wishesForMe} />}
      {pageComp === 'giftsFromMe' && <GiftsFromMe wishes={wishesFromMe} />}
    </div>
  );
}
