import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';
import { CardActions, CardMedia } from '@material-ui/core';
import { Button } from 'reactstrap';

function PresentCard({ el }) {
  return (
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
  );
}

export default PresentCard;
