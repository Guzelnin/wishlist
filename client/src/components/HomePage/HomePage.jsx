import {
  Button, Card, CardActions, CardContent, CardMedia, Grid, Typography,
} from '@mui/material';
// import { useSelector } from 'react-redux';
import React from 'react';

export default function HomePage() {
  // const allWishes = useSelector((state) => state.wishes);
  const allWishes = [
    { id: 1, name: 'phone', photo: 'https://main-cdn.sbermegamarket.ru/mid9/hlr-system/350/939/238/626/217/100028627690b1.jpg' },
    { id: 12, name: 'bag', photo: 'http://themoodmagazine.ru/wp-content/uploads/2016/11/IMG_4002-e1614973698267.jpeg' },
    { id: 13, name: 'boots', photo: 'https://image.12storeez.com/images/750xP_90_out/uploads/images/CATALOG/shoes/108183/613f27ea68217-611c9debba263-05-08-202142724.jpg' },
    { id: 14, name: 'puzzles', photo: 'https://www.openbusiness.ru/upload/iblock/77c/tc7nt4y89c.jpg' },
    { id: 15, name: 'mug', photo: 'https://cdn2.static1-sima-land.com/items/6691691/0/700-nw.jpg' },
    { id: 16, name: 'ps5', photo: 'https://gmedia.playstation.com/is/image/SIEPDC/ps5-product-thumbnail-01-en-14sep21?$facebook$' },
    { id: 17, name: 'flowers', photo: 'https://fruits-exotic.ru/upload/iblock/8c6/8c645e352100dcdcaa2cc3219834d09f.jpg' },
    { id: 18, name: 'cake', photo: 'https://i.pinimg.com/736x/ab/31/dd/ab31ddcfdfcb047d69bc587d3bdcf098.jpg' },
    { id: 19, name: 'car', photo: 'https://pugachev.miami/wp-content/uploads/2019/11/Rent-Lamborghini-Aventador-Matte-in-Miami-4_obr2-1030x625.jpg' }];
  return (
    <Grid
      container
      spacing={2}
      direction="column"
      // justifyContent="center"
      alignItems="center"
    >
      <Grid item xs={8}>
        <div className="video-background">
          <div className="video-foreground">
            <iframe
              title="video"
              src="https://www.youtube.com/embed/W0LHTWG-UmQ?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&playlist=W0LHTWG-UmQ"
              frameBorder="0"
              allowfullscreen
            />
          </div>
        </div>
        {/* <video width="300" height="200">
          <source src="https://youtu.be/IXpL4F4RqLY" />
          <track kind="captions" srcLang="en" label="english_captions" />
        </video> */}
        {/* <video src="https://youtu.be/IXpL4F4RqLY" /> */}
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
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {el.name}
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
