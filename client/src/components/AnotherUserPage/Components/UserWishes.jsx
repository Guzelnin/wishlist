import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import HttpsIcon from '@mui/icons-material/Https';
import { Link, useParams } from 'react-router-dom';
import { setUserWishesAsync } from '../../../redux/actions/anotherWishesActions';

export default function UserWishes() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const allUserWishes = useSelector((state) => state.anotherWishes);
  React.useEffect(() => {
    dispatch(setUserWishesAsync(id));
  }, []);
  return (
    <div>
      {allUserWishes && allUserWishes?.map((el) => (
        <Card sx={{ maxWidth: 345 }} key={el.id}>
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
          </CardContent>
          <CardActions>
            <Button size="small">
              <Link to={`/wishes/${el.Wish.id}`}> Открыть</Link>
            </Button>
            <Button size="small">Хочу себе!</Button>
            {el.Gifts.giver_id
              ? <Button disabled>Забронировано</Button>
              : <Button size="small">Забронировать</Button>}
          </CardActions>
        </Card>
      ))}
    </div>
  );
}
