import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import { useSelector, useDispatch } from 'react-redux';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { Grid } from '@mui/material';
import UserWishes from './Components/UserWishes';
import UserGifts from './Components/UserGifts';
import GiftsForUser from './Components/GiftsForUser';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
}));


export default function AnotherPageNavbar({ anotherWishes, giftsForUser, giftsFromUser }) {
  const [pageComponent, setPageComponent] = React.useState('thiswishes');
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
      <Item>
        <ButtonGroup variant="text" aria-label="text button group">
          <Button onClick={() => setPageComponent('thiswishes')}>Желания</Button>
          <Button onClick={() => setPageComponent('usergifts')}>Подарки пользователю</Button>
          <Button onClick={() => setPageComponent('giftsfromuser')}>Подарки от пользователя</Button>
        </ButtonGroup>
      </Item>
      <Grid item xs={8}>
        <Item>
          {pageComponent === 'thiswishes'
            && <UserWishes allUserWishes={anotherWishes} />}
          {pageComponent === 'usergifts'
            && <UserGifts giftsFromUser={giftsFromUser} />}
          {pageComponent === 'giftsfromuser'
            && <GiftsForUser giftsForUser={giftsForUser} />}
        </Item>
      </Grid>
    </Box>
  );
}
