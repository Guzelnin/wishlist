import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
}));

export default function DetailAnotherUserPage() {
  const { id } = useParams();
  // console.log('===> detail', id);
  const wish = useSelector((state) => state.oneWish);
  // const api = useSelector((state) => state.api);
  // const [sliced, setSliced] = useState(api?.queries?.slice(0, 3) || []);
  // console.log(api?.queries);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getOneWishAsync(id));
    return dispatch(getOneWishAsync(id));
    // dispatch(getApiAsync(id));
    // setSliced(api?.queries?.slice(0, 3));
  }, []);
  return (
    <div className="infocardContainer">
      <div id="main">
        <img src={process.env.REACT_APP_BASEURL + wish?.Wish?.photo} alt="wish" width="100%" />
      </div>
      <div id="textbois">
        <h2> 
          {' '}
          {wish?.Wish?.name}
        </h2>
        <h4>
          Описание:
          <br />
          {`${wish?.description}`}
        </h4>
        <Link to={wish?.Wish?.link}>Ссылка на подарок</Link>
        <div>
          {wish?.private === true
            ? (
              <div>
                Приватность: Приватное желание 
                {' '}
              </div>
            )
            : (
              <div>
                Приватность: Публичное желание
              </div>
            )}
        </div>
        <div id="textbois">
          <div className="wrap">
            <button className="button" onClick={() => navigate(`/wishes/${wish.wish_id}/edit`)}>Редактировать</button>
          </div>
        </div>
        {/* </Grid>
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
              <img src={process.env.REACT_APP_BASEURL + wish?.Wish.photo} alt="wish" width="100%" />
              {/* <Button
                variant="outlined"
                style={{ width: '100%', marginTop: '10px' }}
                onClick={() => navigate(`/wishes/${wish.wish_id}/edit`)}
              >
                Редактировать
              </Button> */}
        {/* </Grid>
          </Item>
        </Grid> */}
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
        {/* </Grid>
    </Box>
  ); */}
      </div>
    </div>
  );
}
