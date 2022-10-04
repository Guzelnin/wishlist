import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import { useSelector, useDispatch } from 'react-redux';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { Grid } from '@mui/material';
import { getMyWishesAsync, setFriendsWishesAsync } from '../../redux/actions/myWishesAction';
import MyWishes from './ComponentsOfPage/MyWishes';
import FriendsWishes from './ComponentsOfPage/FriendsWishes';
import GiftsForMe from './ComponentsOfPage/GiftsForMe';
import GirtsFromMe from './ComponentsOfPage/GirtsFromMe';
import { setGiftsFromMeAsync, setGiftsToMeAsync } from '../../redux/actions/giftsAction';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
}));

export default function PageNavbar({
  myWish, friendWishes, allMyGifts, giftsFromMe, 
}) {
  const [pageComponent, setPageComponent] = React.useState('mywishes');
  const dispatch = useDispatch();
  // const myWishes = useSelector((state) => state.myWishes);
  React.useEffect(() => {
    dispatch(getMyWishesAsync());
    dispatch(setFriendsWishesAsync());
    dispatch(setGiftsToMeAsync());
    dispatch(setGiftsFromMeAsync());
  }, []);
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
          <Button onClick={() => setPageComponent('mywishes')}>Мои желания</Button>
          <Button onClick={() => setPageComponent('friendswishes')}>Желания друзей</Button>
          <Button onClick={() => setPageComponent('giftstome')}>Подарки мне</Button>
          <Button onClick={() => setPageComponent('giftsfromme')}>Подарки от меня</Button>
        </ButtonGroup>
      </Item>
      <Grid item xs={8}>
        <Item>
          {pageComponent === 'mywishes'
            && <MyWishes myWish={myWish} />}
          {/* myWishes={myWishes} */}
          {pageComponent === 'friendswishes'
            && <FriendsWishes friendWishes={friendWishes} />}
          {pageComponent === 'giftstome'
            && <GiftsForMe allMyGifts={allMyGifts} />}
          {pageComponent === 'giftsfromme'
            && <GirtsFromMe giftsFromMe={giftsFromMe} />}
        </Item>
      </Grid>
    </Box>
  );
}
