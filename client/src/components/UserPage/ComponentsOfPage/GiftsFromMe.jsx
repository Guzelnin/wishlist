import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { useDispatch } from 'react-redux';
import { setGiftsFromMeAsync } from '../../../redux/actions/giftsAction';

export default function GiftsFromMe({ wishes }) {
  return (
    <div className="home_bottom_all">
      <div className="cards">
        {wishes && wishes.length !== 0 && wishes?.map((el) => (
          <div key={el.id} id="card" className="card">
            <img src={process.env.REACT_APP_BASEURL + el.Owner.Wish.photo} height="100px" alt="myWish" />
            <div className="card__overlay">
              <div id="content">
                {el.Owner.Wish.name}
                <p>{`Подарок для: ${el.Owner.User.name}`}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
