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
  
      <Grid item xs={8}>
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            // position: 'absolute',
            top: '0',
            bottom: '0',
            right: '0',
            left: '0',
            overflow: 'hidden',
            boxSizing: 'border-box',
            width: '100%',
            // height: '50%',
            // zIndex: '-1',
            // height: '400px',
          }}
        >
          <source src="/video.mp4" type="video/mp4" />
        </video>
      </Grid>
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

            <PresentCard el={el} />
        
          ))}
        </div>
       
      </div>
    </>
  );
}
