import * as React from 'react';
import { useDispatch } from 'react-redux';
import HttpsIcon from '@mui/icons-material/Https';
import { useNavigate } from 'react-router-dom';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import { deleteMyWishesAsync } from '../../../redux/actions/myWishesAction';

export default function MyWishes({ myWishes }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '50px' }}>
      {myWishes && myWishes.length !== 0 && myWishes?.map((el) => (
        <div key={el.id}>
          <img src={process.env.REACT_APP_BASEURL + el.Owner.Wish.photo} height="100px" alt="myWish" />
          <h6>{el.Owner.Wish.name}</h6>
          <div> 
            {' '}
            {el.Owner.private
              ? <HttpsIcon style={{ marginLeft: '30px' }} />
              : <SupervisorAccountIcon style={{ marginLeft: '30px' }} />}
          </div>
          <button onClick={(e) => navigate(`/wishes/${el.Owner.Wish.id}`)}>Открыть</button>
          {el.giver_id
            ? <button disabled>Забронировано</button>
            : (
              <button
                size="small" 
                onClick={() => dispatch(deleteMyWishesAsync(el.Owner.id))}
                className="danger"
              >
                Удалить
              </button>
            )}
        </div>
      ))}
    </div>
  );
}
