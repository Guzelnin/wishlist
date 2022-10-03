import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import HttpsIcon from '@mui/icons-material/Https';
import { setFriendsWishesAsync } from '../../../redux/actions/myWishesAction';

export default function FriendsWishes({ friendWishes }) {
  const dispatch = useDispatch();
  // const friendWishes = useSelector((state) => state.myWishes);
  React.useEffect(() => {
    dispatch(setFriendsWishesAsync());
  }, []);
  console.log(friendWishes[0]);
  return (
    <>
      <div>Желания друзей</div>
      <div>
        {friendWishes && friendWishes?.map((el) => (
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="140"
              image={el.Wish.photo}
              alt={el.Wish.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {el.Wish.name}
                {/* <HttpsIcon style={{ marginLeft: '30px' }} /> */}
              </Typography>
              <Typography>
                {' '}
                Кому:
                {' '}
                {/* {el.User.name} */}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Открыть</Button>
              {/* <Button size="small">Уже подарили</Button> */}
              {/* {el.Gifts.wish_status
                ? <Button disabled>Забронировано</Button>
                : <Button size="small">Удалить</Button>} */}
            </CardActions>
          </Card>
        ))}
      </div>
    </>
  );
}
