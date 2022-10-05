import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Button, Link, Typography } from '@mui/material';
import { getOneWishAsync } from '../../redux/actions/oneWishActions';
import ApiComponent from './ApiComponent';
import { getApiAsync } from '../../redux/actions/apiActions';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
}));

export default function DetailWishPage() {
  const { id } = useParams();
  const wish = useSelector((state) => state.oneWish);
  const api = useSelector((state) => state.api);
  const [sliced, setSliced] = useState(api?.queries?.slice(0, 3) || []);
  console.log(api?.queries);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getOneWishAsync(id));
    // dispatch(getApiAsync(id));
    // setSliced(api?.queries?.slice(0, 3));
  }, []);
  return (
    <Box sx={{ flexGrow: 1 }} style={{ marginTop: '20px' }}>
      <Grid container spacing={2}>
        <Grid item xs={6} md={8}>
          <Item>
            <Grid
              container
              direction="column"
              justifyContent="space-around"
              alignItems="center"
              spacing={9}
            >
              <Grid item>
                <Typography variant="h3">
                  {wish?.Wish?.name}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="h5">
                  <Link href={wish?.Wish?.link}>Ссылка</Link>
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="h5">
                  {`Описание: ${wish?.description}`}
                </Typography>
              </Grid>
              <Grid item>
                {wish?.private === true
                  ? (
                    <Typography variant="h5">
                      Приватность: Приватное желание
                    </Typography>
                  )
                  : (
                    <Typography variant="h5">
                      Приватность: Публичное желание
                    </Typography>
                  )}

              </Grid>
            </Grid>
          </Item>
        </Grid>
        <Grid item xs={6} md={4}>
          <Item>
            <Grid
              container
              direction="column"
              justifyContent="space-around"
              alignItems="center"
            >

             // <img src={wish?.Wish?.photo} alt="wish" width="100%" />

              {/* // {process.env.REACT_APP_BASEURL + */}
              <img src={process.env.REACT_APP_BASEURL + wish?.Wish.photo} alt="wish" width="100%" />

              <Button
                variant="outlined"
                style={{ width: '100%', marginTop: '10px' }}
                onClick={() => navigate(`/wishes/${wish.id}/edit`)}
              >
                Редактировать
              </Button>
            </Grid>
          </Item>
        </Grid>
        {/* <ApiComponent id={id} sliced={sliced} /> */}
        {/* <Grid item xs={12} md={12}>
          <Item>
            <h3 style={{ marginBottom: '10px' }}>Варианты:</h3>
            <Grid
              container
              direction="row"
              justifyContent="space-around"
              alignItems="center"
            >
              <Grid item>
                <Grid
                  container
                  direction="column"
                  justifyContent="space-around"
                  alignItems="center"
                >
                  <img src={wish?.Wish.photo} alt="wish" width="200px" />
                  <h4 style={{ marginTop: '10px' }}>API-1</h4>
                </Grid>
              </Grid>
              <Grid item>
                <Grid
                  container
                  direction="column"
                  justifyContent="space-around"
                  alignItems="center"
                >
                  <img src={wish?.Wish.photo} alt="wish" width="200px" />
                  <h4 style={{ marginTop: '10px' }}>API-2</h4>
                </Grid>
              </Grid>
              <Grid item>
                <Grid
                  container
                  direction="column"
                  justifyContent="space-around"
                  alignItems="center"
                >
                  <img src={wish?.Wish.photo} alt="wish" width="200px" />
                  <h4 style={{ marginTop: '10px' }}>API-3</h4>
                </Grid>
              </Grid>
            </Grid>
          </Item> */}
        {/* </Grid> */}
      </Grid>
    </Box>
  );
}
