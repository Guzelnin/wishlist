import {
  Box,
  Button, Checkbox, FormControl, Grid,
  InputLabel, MenuItem, Select, TextField,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategoriesAsync } from '../../redux/actions/categoriesAcrions';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function AddWish() {
  const categories = useSelector((state) => state.categories);
  const [priv, setPriv] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategoriesAsync());
  }, []);
  const [inputs, setInputs] = useState({
    name: '', link: '', photo: '', categoryId: '', description: '', date: '', private: false,
  });
  const changeHandler = (e) => {
    if (e.target.name === 'private') {
      setInputs((prev) => ({
        ...prev,
        private: !prev.private,
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
    console.log(inputs);
  };
  // console.log(priv);
  console.log(inputs);
  return (
    <form onSubmit={submitHandler} autoComplete="off">
      <Grid
        container
        spacing={2}
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item>
          <TextField
            id="outlined-basic"
            label="Название желания"
            variant="outlined"
            required
            name="name"
            onChange={changeHandler}
            value={inputs.name}
          />
        </Grid>
        <Grid item>
          <TextField
            id="outlined-basic"
            label="Ссылка"
            variant="outlined"
            required
            name="link"
            onChange={changeHandler}
            value={inputs.link}
          />
        </Grid>
        <Grid item>
          <TextField
            id="outlined-basic"
            label="Фото"
            variant="outlined"
            required
            name="photo"
            onChange={changeHandler}
            value={inputs.photo}
          />
        </Grid>
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
            required
            name="description"
            onChange={changeHandler}
            value={inputs.description}
          />
        </Grid>
        <Grid item>
          <label htmlFor="start">
            Дедлайн желания
            <input
              type="date"
              name="date"
              onChange={changeHandler}
              value={inputs.date}
            />
          </label>
        </Grid>
        <Grid item>
          <Checkbox
            {...label}
            name="private"
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
        {/* !!!!!!!!!!!!!!!!!!!!!!!!  shitcode   !!!!!!!!!!!!!!!!!!!!!!!! */}
        <Grid item>
          <br />
          <br />
          <br />
          <br />
        </Grid>
        {/* !!!!!!!!!!!!!!!!!!!!!!!!  shitcode   !!!!!!!!!!!!!!!!!!!!!!!! */}
      </Grid>
    </form>
  );
}
