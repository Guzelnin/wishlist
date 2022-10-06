import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getAnotherUserWishesAsync } from '../../../redux/actions/anotherUserWishesActions';
import { addWishesFromMeAsync } from '../../../redux/actions/wishesFromMeActions';

export default function WishesCard({ wish, userId }) {
  const [book, setBook] = useState(wish.giver_id !== null);
  const dispatch = useDispatch();
  return (
    <div key={wish.id}>
      <img src={process.env.REACT_APP_BASEURL + wish.Owner.Wish.photo} height="100px" alt="myWish" />
      <h6>{wish.Owner.Wish.name}</h6>
      {book
        ? (
          <button disabled>Забронировано</button>
        )
        : (
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
        )}
    </div>
  );
}
