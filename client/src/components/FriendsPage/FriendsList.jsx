import { Avatar, Grid, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function FriendsList({ friends }) {
  const navigate = useNavigate();
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
    >
      {friends && friends.lendth !== 0 && friends?.map((el) => (
        <Grid
          item
          key={el.id}
          xs={4}
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          onClick={() => navigate(`/${el.id}`)}
        >
          <Avatar
            alt="friend"
            src={el.photo}
            sx={{ width: 200, height: 200 }}
          />
          <Typography variant="h5" style={{ marginTop: '10px', marginBottom: '20px' }}>{el.name}</Typography>
        </Grid>
      ))}
    </Grid>
  );
}
