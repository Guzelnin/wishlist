import { Container } from '@mui/system';
import React from 'react';
import UserDescription from '../UserPage/UserDescription';
import WishPlace from '../UserPage/WishPlace';
import PageNavbar from './PageNavbar';

export default function UserPage() {
  return (
    <Container>
      <UserDescription />
      <PageNavbar />
      <WishPlace />
    </Container>
  );
}
