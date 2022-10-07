import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getAnotherUserWishesAsync } from '../../../redux/actions/anotherUserWishesActions';
import { addWishesFromMeAsync } from '../../../redux/actions/wishesFromMeActions';

export default function WishesCard({ wish, userId }) {
  const [book, setBook] = useState(wish.giver_id !== null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div id="card" className="card">
      <img className="card_image" src={process.env.REACT_APP_BASEURL + wish.Owner.Wish.photo} height="100px" alt="myWish" />
      <div className="card__overlay">
        <div id="content">
          {wish.Owner.Wish.name}
        </div>
        <div id="another_user_page_button">
          <button onClick={() => navigate(`/wishes/${wish.Owner.Wish.id}`)}>Открыть</button>
        </div>
        {book
          ? (
            <div id="another_user_page_button_booked">
              <button disabled>Забронировано</button>
            </div>
          )
          : (
            <div id="another_user_page_button">
              <button
                size="small" 
                onClick={() => {
                  dispatch(addWishesFromMeAsync(wish.id));
                  setBook(true);
                }}
                className="danger"
              >
                Забронировать
              </button>
            </div>
          )}
      </div>
    </div>
  );
}
