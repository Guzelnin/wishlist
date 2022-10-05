import { Container } from '@mui/system';
import React from 'react';
import { useSelector } from 'react-redux';
import UserDescription from './UserDescription';
import PageNavbar from './PageNavbar';

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
