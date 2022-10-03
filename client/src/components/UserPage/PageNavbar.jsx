import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';

export default function PageNavbar() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
          m: 1,
        },
      }}
    >
      <ButtonGroup variant="text" aria-label="text button group" style={{ marginTop: '50px' }}>
        <Button>Мои желания</Button>
        <Button>Желания друзей</Button>
        <Button>Подарки мне</Button>
        <Button>Подарки от меня</Button>
      </ButtonGroup>
    </Box>
  );
}
