import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';
import { CardActions, CardMedia } from '@material-ui/core';
import { Button } from 'reactstrap';
import { useNavigate } from 'react-router-dom';

function PresentCard({ el }) {
  const navigate = useNavigate();
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={el.Wish.photo}
        alt="wish"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {el.Wish.name}
        </Typography>
        <Typography gutterBottom component="div">
          {`категория: ${el.Wish.Category.title}`}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => navigate(`/wishes/${el.Wish.id}/copy`)}>Хочу себе!</Button>
      </CardActions>
    </Card>
  );
}

export default PresentCard;
