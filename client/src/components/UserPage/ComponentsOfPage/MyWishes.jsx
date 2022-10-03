import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { useDispatch, useSelector } from 'react-redux';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import HttpsIcon from '@mui/icons-material/Https';
import { getMyWishesAsync } from '../../../redux/actions/myWishesAction';

export default function MyWishes() {
  const dispatch = useDispatch();
  const myWish = useSelector((state) => state.myWishes);
  React.useEffect(() => {
    dispatch(getMyWishesAsync());
  }, []);
  console.log(myWish[0]);
  return (
    <div>
      {myWish && myWish?.map((el) => (
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="140"
            image={el.Wish.photo}
            alt="el.Wish.name"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {el.Wish.name}
              <HttpsIcon style={{ marginLeft: '30px' }} />
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Открыть</Button>
            <Button size="small">Уже подарили</Button>
            {el.Gifts.wish_status
              ? <Button disabled>Забронировано</Button>
              : <Button size="small">Удалить</Button>}
          </CardActions>
        </Card>
      ))}
    </div>
  );
}
