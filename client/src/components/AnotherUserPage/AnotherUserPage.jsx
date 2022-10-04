import { Container } from '@mui/system';
import React from 'react';
import AnotherPageNavbar from './AnotherPageNavbar';
import AnotherUserDescription from './AnotherUserDescription';

export default function AnotherUserPage() {
  return (
    <Container>
      <AnotherUserDescription />
      <AnotherPageNavbar />
    </Container>
  );
}
