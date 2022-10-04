import {
  Avatar,
  Box, Button, Checkbox, FormControl, Grid, Input, InputLabel, Link, MenuItem, Paper, Select, TextField, Typography, 
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { Form } from 'reactstrap';
import { getMyPage, setMyPage } from '../../redux/actions/pageAction';
import { editUser } from '../../redux/actions/userActions';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
}));

export default function UserPageEditing() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const myPage = useSelector((state) => state.page);
  useEffect(() => {
    dispatch(getMyPage());
  }, []);
  return (
    <Box sx={{ flexGrow: 1 }} style={{ marginTop: '20px' }}>
      <Grid container spacing={2}>
        <Grid item xs={6} md={4}>
          <Item>
            <Grid
              container
              direction="column"
              justifyContent="space-around"
              alignItems="center"
            >
              <Typography variant="h5">{myPage?.name}</Typography>
              <Avatar
                alt="My avatar"
                src={myPage.photo}
                sx={{ width: '150px', height: '150px' }}
              />
            </Grid>
          </Item>
        </Grid>
        <Grid item xs={6} md={8}>
          <Item>
            <Form
              onSubmit={(e) => {
                dispatch(editUser(e, Object.fromEntries(new FormData(e.target))));
                dispatch(getMyPage());
                navigate('/mypage');
              }}
              autoComplete="off"
            >
              <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
              >
                <input type="text" id="name" className="fadeIn second" name="name" placeholder="Имя" />
                <input type="text" id="email" className="fadeIn third" name="email" placeholder="email" />
                <input type="password" id="password" className="fadeIn fourth" name="password" placeholder="Пароль" />
                <input type="text" id="photo" className="fadeIn fifth" name="photo" placeholder="Фото" />
                <input type="date" id="bday" className="fadeIn sixth" name="bday" placeholder="birthday" />
                <input type="text" id="description" className="fadeIn seventh" name="description" placeholder="Описание" />
                <input type="submit" className="fadeIn eight" value="Сохранить изменения" />
                <button
                  type="button"
                  onClick={() => {
                    navigate('/mypage');
                  }}
                >
                  Отмена
                </button>
              </Grid>
            </Form>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
