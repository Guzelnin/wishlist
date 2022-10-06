import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import HttpsIcon from '@mui/icons-material/Https';
import RedeemIcon from '@mui/icons-material/Redeem';

export default function FriendsWishes({ wishes }) {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '50px' }}>
        {wishes && wishes.length !== 0 && wishes?.map((el) => (
          <div id="card" className="card" key={el.id}>
            <img src={process.env.REACT_APP_BASEURL + el.Owner.Wish.photo} height="100px" alt="myWish" />
            <div className="card__overlay">
              <div id="content">
                {el.Owner.Wish.name}
                <p>{`Кому: ${el.Owner.User.name}`}</p>
              </div>
              {el.wish_status
                ? (
                  <div id="add_button" style={{ marginBottom: '10px' }}>
                    Забронировано
                    <HttpsIcon style={{ marginLeft: '30px' }} />
                  </div>
                )
                : (
                  <div id="add_button" style={{ marginBottom: '10px' }}>
                    Подарено
                    <RedeemIcon style={{ marginLeft: '30px' }} />
                  </div>
                )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
