import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function MediaCard({ person }) {
  return (
    <Card sx={{ maxWidth: 180 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {person.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {person.email}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default MediaCard;
