import {
  Box, Button, Checkbox, FormControl, Grid, Input, InputLabel, Link, MenuItem, Paper, Select, TextField, Typography, 
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getWishToCopyAsync } from '../../redux/actions/copyWishActions';
import { getCategoriesAsync } from '../../redux/actions/categoriesActions';
import { addCopyWishAsync } from '../../redux/actions/myWishesAction';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
}));
export default function NewWishCopy() {
  const categories = useSelector((state) => state.categories);
  const [priv, setPriv] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategoriesAsync());
  }, []);
  const [inputs, setInputs] = useState({
    categoryId: '', description: '', date: '', privateWish: false,
  });
  const { id } = useParams();
  const wish = useSelector((state) => state.oneWishToCopy);
  useEffect(() => {
    dispatch(getWishToCopyAsync(id));
  }, []);
  const changeHandler = (e) => {
    if (e.target.name === 'privateWish') {
      setInputs((prev) => ({
        ...prev,
        privateWish: !prev.privateWish,
      }));
      return;
    }
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addCopyWishAsync(inputs, id));
    navigate('/mypage');
  };
  return (
    <Box sx={{ flexGrow: 1 }} style={{ marginTop: '20px' }}>
      <Grid container spacing={2}>
        <Grid item xs={6} md={4}>
          <Item>
            <Grid
              container
              direction="column"
              alignItems="center"
            >
              <Typography variant="h5">{wish?.name}</Typography>
              <img src={wish?.photo} alt="wish" width="100%" />
              <Link href={wish?.link}>
                <Typography variant="h6">
                  Ссылка на желание
                </Typography>
              </Link>
            </Grid>
          </Item>
        </Grid>
        <Grid item xs={6} md={8}>
          <Item>
            <form onSubmit={submitHandler} autoComplete="off">
              <Grid
                container
                direction="column"
                justifyContent="space-around"
                alignItems="center"
                spacing="8"
              >
                <Box sx={{ minWidth: 120 }}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Категория</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      name="categoryId"
                      onChange={changeHandler}
                      value={inputs.categoryId}
                      label="Category"
                    >
                      {categories && categories?.map((el) => (
                        <MenuItem
                          key={el.id}
                          value={el.id}
                        >
                          {el.title}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Box>
                <Grid item>
                  <TextField
                    id="outlined-basic"
                    label="Описание"
                    variant="outlined"
                    autoComplete="off"
                    name="description"
                    onChange={changeHandler}
                    value={inputs.description}
                  />
                </Grid>
                <Grid item>
                  <div>
                    Дедлайн желания
                  </div>
                  <Input
                    type="date"
                    name="date"
                    onChange={changeHandler}
                    value={inputs.date}
                  />
                </Grid>
                <Grid item>
                  <Checkbox
                    {...label}
                    name="privateWish"
                    checked={priv === true}
                    onChange={changeHandler}
                    onClick={() => setPriv(!priv)}
                    value={priv === true}
                  />
                  Приватное желание
                </Grid>
                <Grid item>
                  <Button variant="contained" type="submit">Добавить желание</Button>
                </Grid>
              </Grid>
            </form>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
