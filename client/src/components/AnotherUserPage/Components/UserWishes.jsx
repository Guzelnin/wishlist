import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { setUserWishesAsync } from '../../../redux/actions/anotherWishesActions';
import { addFGiftAsync } from '../../../redux/actions/bookingActions';

export default function UserWishes({ allUserWishes }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const bookingWish = useSelector((state) => state.booking);
  const dispatch = useDispatch();
  const [booked, setBooked] = React.useState(null);
  console.log(bookingWish);
  React.useEffect(() => {
    dispatch(setUserWishesAsync(id));
    setBooked();
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
              {el?.Wish?.name}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">
              <Link to={`/wishes/${el.Wish.id}`}>Открыть</Link>
            </Button>
            <Button size="small" onClick={() => navigate(`/wishes/${el.Wish.id}/copy`)}>Хочу себе!</Button>
            {booked === null
              ? <Button size="small" onClick={() => { dispatch(addFGiftAsync(id, el.Wish.id)); setBooked(el.Gifts[0].giver_id); }}>Забронировать</Button>
              : <Button disabled>Забронировано</Button>}
          </CardActions>
        </Card>
      ))}
    </div>
  );
}
