import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import HttpsIcon from '@mui/icons-material/Https';
import RedeemIcon from '@mui/icons-material/Redeem';

export default function FriendsWishes({ wishes }) {
  // const dispatch = useDispatch();
  // React.useEffect(() => {
  //   dispatch(setFriendsWishesAsync());
  // }, []);

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '50px' }}>
        {wishes && wishes.length !== 0 && wishes?.map((el) => (
          <div key={el.id}>
            <img src={process.env.REACT_APP_BASEURL + el.Owner.Wish.photo} height="100px" alt="myWish" />
            <h6>{el.Owner.Wish.name}</h6>
            <p>Кому:</p>
            <p>{el.Owner.User.name}</p>
            {el.wish_status
              ? (
                <div>
                  Забронировано
                  <HttpsIcon style={{ marginLeft: '30px' }} />
                </div>
              )
              : (
                <div>
                  Подарено
                  <RedeemIcon style={{ marginLeft: '30px' }} />
                </div>
              )} 
            {/* {el.giver_id
              ? <button disabled>Забронировано</button>
              : (
                <button
                  size="small" 
                  onClick={() => dispatch(deleteMyWishesAsync(el.Owner.id))}
                  className="danger"
                >
                  Удалить
                </button>
              )} */}
          </div>
        ))}
      </div>
      {/* {friendWishes && friendWishes.length !== 0 && friendWishes?.map((el) => (
        <Card key={el.id} sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="140"
            image={process.env.REACT_APP_BASEURL + el.Wish.photo}
            alt={el?.Wish.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {el?.Wish?.name}
              <HttpsIcon style={{ marginLeft: '30px' }} />
            </Typography>
            <Typography>
              {' '}
              Кому:
              {' '}
              {el?.User?.name}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Открыть</Button> 
            {el?.Gifts?.wish_status
              ? <Button disabled>Забронировано</Button>
              : <Button size="small">Подарено</Button>} 
          </CardActions>
        </Card>
      ))} */}
    </div>
  );
}
