import * as React from 'react';
import { useDispatch } from 'react-redux';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import HttpsIcon from '@mui/icons-material/Https';
import { Link, useNavigate } from 'react-router-dom';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import { getMyWishesAsync, deleteMyWishesAsync } from '../../../redux/actions/myWishesAction';
import Timer from '../../Timer';

export default function MyWishes({ myWish }) {
  console.log(myWish);
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  React.useEffect(() => {
    dispatch(getMyWishesAsync());
    dispatch(deleteMyWishesAsync());
  }, []);
  return (
    <div>
      {myWish && myWish?.map((el) => (
        <Card sx={{ maxWidth: 345 }} key={el?.id}>
          <CardMedia
            component="img"
            height="140"
            image={process.env.REACT_APP_BASEURL + el?.Wish?.photo}
            alt={el?.Wish?.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {el?.Wish?.name}
              {el?.private
                ? <HttpsIcon style={{ marginLeft: '30px' }} />
                : <SupervisorAccountIcon style={{ marginLeft: '30px' }} />}  
            </Typography>
          </CardContent>
          {/* <Timer date={el?.date} /> */}
          <CardActions>
            <Button size="small">
              <Link to={`/wishes/${el?.Wish?.id}`}> Открыть</Link>
            </Button>
            <Button size="small">Уже подарили</Button>
            {el?.Gifts[0]?.giver_id
              ? <Button disabled>Забронировано</Button>
              : <Button size="small" onClick={() => dispatch(deleteMyWishesAsync(el?.id))} className="danger">Удалить</Button>}
          </CardActions>
        </Card>
      ))}
    </div>
  );
}
