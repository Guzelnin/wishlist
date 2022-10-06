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
        <img src={process.env.REACT_APP_BASEURL + wish?.Wish.photo} alt="wish" width="100%" />
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
      </div>
     
    </div>
  
  ); 
}
