
import React from 'react';
import OneWishCard from '../OneWishCard';
import {
  Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Typography,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { getWishesAsync } from '../../redux/actions/wishesActions';

export default function HomePage() {
  const allWishes = useSelector((state) => state.wishes);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getWishesAsync());
  }, []);
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
      <Grid item xs={8}>
        <Grid
          container
          spacing={2}
          direction="row"
          justifyContent="space-around"
          alignItems="center"
        >
          {allWishes && allWishes.length !== 0
          && allWishes.map((el) => (
            <Grid item xs={4} key={el.id}>
              <Card sx={{ maxWidth: 345 }}>
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
              </Card>

            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
