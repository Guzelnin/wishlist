import {
  Button, Card, CardActions, CardContent, CardMedia, Grid, Typography,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
// import OneWishCard from '../OneWishCard';
import SearchIcon from '@mui/icons-material/Search';
import { getWishesAsync } from '../../redux/actions/wishesActions';
import PresentCard from './PresentCard';

export default function HomePage({ user }) {
  const [data, setData] = useState('');
  const allWishes = useSelector((state) => state.wishes);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getWishesAsync());
  }, []);
  useEffect(() => {
    dispatch(getWishesAsync());
  }, [user.id]);
  return (
    <>

      <div className="video_wrapper">
        <div className="full-screen">
          <div className="full-screen__body">
            <div className="full-screen__title">Wishplace</div>
            <div className="full-screen__text">Место, где хранятся твои желания</div>
          </div>
          <video
            autoPlay
            loop
            muted
            className="full-screen__video"
          >
            <source src="/video.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
      <div className="home_bottom_all">
        <div className="home_line">
          Желания других пользователей
  
        </div>
        <form action="" className="search-bar">
          <input type="search" name="search" pattern=".*\S.*" required onChange={(e) => setData(e.target.value)} />
          <button className="search-btn">
            <span>Search</span>
          </button>
        </form>
        <div className="cards">      
          {allWishes && allWishes.length !== 0 && allWishes.filter((value) => value.Wish.name.toLowerCase().includes(data.toLowerCase())).map((el) => (

            <PresentCard el={el} key={el.id} />
        
          ))}
        </div>
       
      </div>

    </>
  );
}
