import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import {
  Button, Checkbox, FormControl, Input, InputLabel, Link, MenuItem, Modal, Select, TextField, Typography, 
} from '@mui/material';
import { editOneWishesAsync, getOneWishAsync } from '../../redux/actions/oneWishActions';
import { getCategoriesAsync } from '../../redux/actions/categoriesActions';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
}));

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function EditDetailWishPage() {
  const [priv, setPriv] = useState(false);
  const navigate = useNavigate();
  const categories = useSelector((state) => state.categories);
  const { id } = useParams();
  const oldWish = useSelector((state) => state.oneWish);
  const dispatch = useDispatch();
  const [editInputs, setEditInputs] = useState({
    categoryId: '', description: '', date: '', privateWish: false,
  });
  const changeHandler = (e) => {
    if (e.target.name === 'privateWish') {
      setEditInputs((prev) => ({
        ...prev,
        privateWish: !prev.privateWish,
      }));
      return;
    }
    setEditInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(editInputs);
    dispatch(editOneWishesAsync(editInputs, id));
    navigate('/mypage');
  };
  useEffect(() => {
    dispatch(getOneWishAsync(id));
    dispatch(getCategoriesAsync());
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
            >
              <Grid item>
                <form onSubmit={submitHandler} autoComplete="off">
                  <input type="date" name="date" placeholder="Дата" value={editInputs.date} onChange={changeHandler} />
                  <input type="text" name="description" placeholder="Описание желания" value={editInputs.description} onChange={changeHandler} />
                  <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">Категория</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        name="categoryId"
                        onChange={changeHandler}
                        value={editInputs.categoryId}
                        label="Category"
                      >
                        {categories && categories?.map((el) => (
                          <MenuItem
                            key={el?.id}
                            value={el?.id}
                          >
                            {el?.title}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Box>
                  <Checkbox
                    {...label}
                    name="privateWish"
                    checked={priv === true}
                    onChange={changeHandler}
                    onClick={() => setPriv(!priv)}
                    value={priv === true}
                  />
                  Приватное желание
                  <div>

                    <Button type="submit">Edit</Button>
                  </div>
                </form>
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
              spacing={9}
            >
              <Grid item>
                <h5>{oldWish?.Wish?.name}</h5>
              </Grid>
              <Grid item>
                <img src={oldWish?.Wish?.photo} alt="wish" width="100%" />
                {/* <img src={process.env.REACT_APP_BASEURL + el.Owner.Wish.photo} height="100px" alt="myWish" /> */}
              </Grid>
            </Grid>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
