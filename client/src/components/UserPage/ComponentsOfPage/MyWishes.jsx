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

export default function MyWishes({ myWish }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  React.useEffect(() => {
    dispatch(getMyWishesAsync());
    dispatch(deleteMyWishesAsync());
  }, []);
  return (
    <div>
      {myWish && myWish?.map((el) => (
        <div id="card" className="card">
          <img className="card_image" src={process.env.REACT_APP_BASEURL + el.Wish.photo} alt={el.Wish.name} />
          <div className="card__overlay">
            <div id="content">
              {el.Wish.name}
              {el.private
                ? <HttpsIcon style={{ marginLeft: '30px' }} />
                : <SupervisorAccountIcon style={{ marginLeft: '30px' }} />}  

            </div>
            <div id="add_button">
              <button onClick={() => navigate(`/wishes/${el.Wish.id}`)}> Открыть</button>
              {el.Gifts[0].giver_id
                ? <button disabled onClick={() => navigate(`/wishes/${el.Wish.id}`)}> Забронировано</button>
                : <button onClick={() => dispatch(deleteMyWishesAsync(el.id))} className="danger">Удалить</button>}
            </div>
           
          </div>
        </div>
        
      ))}
    </div>
  );
}
