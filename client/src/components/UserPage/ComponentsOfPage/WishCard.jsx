import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import HttpsIcon from '@mui/icons-material/Https';
import { useNavigate } from 'react-router-dom';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import { deleteMyWishesAsync, getMyWishesAsync } from '../../../redux/actions/myWishesAction';
import { addWishesForMeAsync, getWishesForMe, getWishesForMeAsync } from '../../../redux/actions/wishesForMeActions';

export default function WishCard({ wish }) {
  const [gifted, setGifted] = useState(wish?.wish_status === true);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // useEffect(() => {
  //   // dispatch(getMyWishesAsync());
  // }, [gifted]);
  return (
    <div key={wish.id}>
      <img src={process.env.REACT_APP_BASEURL + wish.Owner.Wish.photo} height="100px" alt="myWish" />
      <h6>{wish?.Owner?.Wish?.name}</h6>
      <div> 
        {' '}
        {wish?.Owner?.private
          ? <HttpsIcon style={{ marginLeft: '30px' }} />
          : <SupervisorAccountIcon style={{ marginLeft: '30px' }} />}
      </div>
      <button onClick={(e) => navigate(`/wishes/${wish.Owner.Wish.id}`)}>Открыть</button>
      {wish?.giver_id
        ? (
          <>
            <button disabled>Забронировано</button>
            {gifted
              ? (
                <button onClick={() => {
                  dispatch(getMyWishesAsync());
                  dispatch(addWishesForMeAsync(wish?.id));
                  dispatch(getWishesForMeAsync());
                  setGifted(false);
                }}
                >
                  Подарено
                </button>
              )
              : <button disabled>Подарено</button>}
          </>
        )
        
        : (
          <button
            size="small" 
            onClick={() => dispatch(deleteMyWishesAsync(wish.Owner.id))}
            className="danger"
          >
            Удалить
          </button>
        )}
    </div>
  );
}
