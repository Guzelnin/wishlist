import { Container } from '@mui/system';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UserDescription from './UserDescription';
// import WishPlace from '../UserPage/WishPlace';
import PageNavbar from './PageNavbar';
import { getMyWishesAsync, setFriendsWishesAsync } from '../../redux/actions/myWishesAction';
import { setGiftsFromMeAsync, setGiftsToMeAsync } from '../../redux/actions/giftsAction';

export default function UserPage() {
  const myWish = useSelector((state) => state.myWishes);
  const friendWishes = useSelector((state) => state.myWishes);
  const allMyGifts = useSelector((state) => state.gifts);
  const giftsFromMe = useSelector((state) => state.gifts);
  return (
    <Container>
      <UserDescription />
      <PageNavbar myWish={myWish} friendWishes={friendWishes} allMyGifts={allMyGifts} giftsFromMe={giftsFromMe} />
    </Container>
  );
}
