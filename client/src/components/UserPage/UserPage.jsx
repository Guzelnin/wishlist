import { Container } from '@mui/system';
import React from 'react';
import UserDescription from '../UserDescription';

import WishPlace from '../WishPlace';

export default function UserPage() {
  return (
    <Container>
      <UserDescription />
      <WishPlace />
    </Container>
  );
}
