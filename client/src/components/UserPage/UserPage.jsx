import { Container } from '@mui/system';
import React from 'react';
import PageNavbar from './PageNavbar';
import UserDescription from '../UserDescription';

import WishPlace from '../WishPlace';

export default function UserPage() {
  return (
    <Container>
      <UserDescription />
      <PageNavbar />
      <WishPlace />
    </Container>
  );
}
