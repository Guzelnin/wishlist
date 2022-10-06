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
  useEffect(() => {
    dispatch(getMyWishesAsync());
  }, [gifted]);
  return (
    <div id="card" className="card">
      <img className="card_image" src={process.env.REACT_APP_BASEURL + wish.Owner.Wish.photo} height="100px" alt="myWish" />
      <div className="card__overlay">
        <div id="content">
          {wish?.Owner?.Wish?.name}
          {wish?.Owner?.private
            ? <HttpsIcon style={{ marginLeft: '30px' }} />
            : <SupervisorAccountIcon style={{ marginLeft: '30px' }} />}
        </div>
        <div id="user_page_button">
          <button onClick={(e) => navigate(`/wishes/${wish.Owner.Wish.id}`)}>Открыть</button>
        </div>
        {wish?.giver_id
          ? (
            <>
              <div id="another_user_page_button_booked">
                <button disabled>Забронировано</button>
              </div>
              
              {gifted
                ? (
                  <div id="user_page_button">
                    <button onClick={() => {
                      dispatch(getMyWishesAsync());
                      dispatch(addWishesForMeAsync(wish?.id));
                      dispatch(getWishesForMeAsync());
                      setGifted(false);
                    }}
                    >
                      Подарено
                    </button>
                  </div>
                )
                : <div id="another_user_page_button_booked"><button disabled>Подарено</button></div>}
            </>
          )
          : (
            <div id="user_page_button">
              <button
                size="small" 
                onClick={() => dispatch(deleteMyWishesAsync(wish.Owner.id))}
                className="danger"
              >
                Удалить
              </button>
            </div>
          )}
        
      </div>
    </div>
  );
}
