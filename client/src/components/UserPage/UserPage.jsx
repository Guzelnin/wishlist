import { Container } from '@mui/system';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UserDescription from './UserDescription';
// import WishPlace from '../UserPage/WishPlace';
import PageNavbar from './PageNavbar';
import { getMyWishesAsync, setFriendsWishesAsync } from '../../redux/actions/myWishesAction';

export default function UserPage() {
  const dispatch = useDispatch();
  const myWish = useSelector((state) => state.myWishes);
  React.useEffect(() => {
    dispatch(getMyWishesAsync());
    dispatch(setFriendsWishesAsync());
  }, []);
  const friendWishes = useSelector((state) => state.myWishes);
  return (
    <Container>
      <UserDescription />
      <PageNavbar myWish={myWish} friendWishes={friendWishes} />
    </Container>
  );
}
