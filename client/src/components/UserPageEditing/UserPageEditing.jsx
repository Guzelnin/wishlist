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
  const myPage = useSelector((state) => state.page);
  const [inputs, setInputs] = useState({ 
    name: myPage.name, email: myPage.email, password: '', photo: '', date: '', description: myPage.description,
  });
  const [error, setError] = useState({ 
    name: false, email: false, photo: false, date: false, description: false,
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const changeHandler = (e) => {
    // setInputs((prev) => ({
    //   ...prev,
    //   [e.target.name]: e.target.value,
    // }));
  };

  const submitHandler = (e) => {
    // setError({
    //   [e.target.name]: e.target.value === '',
    // });
    // dispatch(editUser(e, inputs));
    // dispatch(getMyPage());
    // navigate('/mypage');
  };

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
            {/* <Form
              onSubmit={submitHandler}
              autoComplete="off"
            > */}
            <form onSubmit={submitHandler}>
              <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
              >
                <input type="text" style={{ borderColor: error.name === false ? 'transparent' : 'red' }} id="name" value={inputs.name} onChange={changeHandler} className="lol second" name="name" placeholder="Имя" />
                <input type="text" id="email" value={inputs.email} onChange={changeHandler} className="lol third" name="email" placeholder="email" />
                <input type="password" id="password" className="lol fourth" onChange={changeHandler} name="password" placeholder="Пароль" />
                <input type="text" id="photo" className="lol fifth" onChange={changeHandler} name="photo" placeholder="Фото" />
                <input type="date" id="bday" value={inputs.date} onChange={changeHandler} className="lol sixth" name="bday" placeholder="birthday" />
                <input type="text" id="description" value={inputs.description} onChange={changeHandler} className="lol seventh" name="description" placeholder="Описание" />
                {/* <input type="submit" className="lol eight" value="Сохранить изменения" /> */}
              </Grid>
              <button type="submit">ok</button>
              {/* </Form> */}
            </form>
            <input
              type="button"
              // onClick={() => {
              //   navigate('/mypage');
              // }}
              className="lol eight"
              value="Отмена"
            />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
