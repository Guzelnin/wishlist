import {
  Button, Card, CardActions, CardContent, CardMedia, Grid, Typography,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
// import OneWishCard from '../OneWishCard';
import MyFooter from '../MyFooter';
import { getWishesAsync } from '../../redux/actions/wishesActions';
import PresentCard from '../Search/PresentCard';

export default function HomePage() {
  const [data, setData] = useState('');
  const allWishes = useSelector((state) => state.wishes);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getWishesAsync());
  }, []);

  // const newFilterWord = allWishes.filter((el) => el.title.toLowerCase().includes(data.toLowerCase()));
  return (
    <Grid
      container
      spacing={2}
      direction="column"
      // justifyContent="center"
      alignItems="center"
    >
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
      <Grid item xs={8}>
        Желания других пользователей
      </Grid>
      <input
        type="text"
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
        {allWishes && allWishes.length !== 0 && allWishes.filter((value) => value.name.toLowerCase().includes(data.toLowerCase())).map((el) => (
          <Grid item xs={4}>
            {/* <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  height="140"
                  image={el.photo}
                  alt="wish"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {el.name}
                  </Typography>
                  <Typography gutterBottom component="div">
                    {`категория: ${el.Category.title}`}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">button</Button>
                </CardActions>
              </Card> */}
            <PresentCard key={el.id} el={el} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}
