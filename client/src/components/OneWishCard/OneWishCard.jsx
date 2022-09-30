// import React from 'react';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// import BlockIcon from '@mui/icons-material/Block';
import HttpsIcon from '@mui/icons-material/Https';
// import { pink } from '@mui/material/colors';

export default function OneWishCard() {
  const status = true;
  const wish = [];
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="https://animal.tden.ru/wp-content/uploads/2014/10/1.jpg"
        alt="фото желания"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Название желания
          <HttpsIcon style={{ marginLeft: '30px' }} />
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Открыть</Button>
        <Button size="small">Уже подарили</Button>
        {status
          ? <Button disabled>Забронировано</Button>
          : <Button size="small">Удалить</Button>}

        {/* <BlockIcon sx={{ color: pink[500] }} /> */}
      </CardActions>
    </Card>
  );
}
