import {
  Button, Card, CardActions, CardContent, CardMedia, Grid, Typography,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
// import OneWishCard from '../OneWishCard';
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
      <Grid
        container
        spacing={2}
        direction="column"
      // justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={8}>
          Желания других пользователей
        </Grid>
        <input
          className="input_search"
          placeholder="Поиск..."
        // onChange={handlerFilter}
          onChange={(e) => setData(e.target.value)}
        />
        {/* <Grid item xs={8}> */}
        <Grid
          container
          spacing={2}
          direction="row"
          justifyContent="space-around"
          alignItems="center"
        >
          {/* {newFilterWord && newFilterWord.length !== 0
          && newFilterWord.map((el) => ( */}
          {allWishes && allWishes.length !== 0 && allWishes.filter((value) => value.Wish.name.toLowerCase().includes(data.toLowerCase())).map((el) => (
            <Grid item xs={4} key={el.id}>
              <PresentCard el={el} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </>
  );
}
