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
  console.log('oldWish', oldWish);
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
    <>
      <div>
        <h5>{oldWish?.Wish?.name}</h5>
      </div>
      <div id="rigth">
        <img src={oldWish?.Wish?.photo} alt="wish" width="100%" />
      </div>

      <div className="wrapper_edit fadeInDown">
        <div id="formContent">
          <h2 className="active"> Редактирование </h2>
          <div className="fadeIn first">
            <img src="https://thumbs.dreamstime.com/b/литерность-вектора-руки-wishlist-вычерченная-145269082.jpg" id="icon" alt="User Icon" />
          </div>
          <form onSubmit={submitHandler} autoComplete="off">
            <div className="fadeIn second">
              Дедлайн подарка
              <input
                className="fadeIn second"
                type="date"
                name="date"
                value={editInputs.date}
                onChange={changeHandler}
              />
            </div>
            <input
              className="fadeIn third"
              id="outlined-basic"
              placeholder="Описание"
              required
              type="text"
              name="description"
              value={editInputs.description}
              onChange={changeHandler}
            />
            <select
              id="selection"
              className="fadeIn fourth"
              name="categoryId"
              onChange={changeHandler}
              value={editInputs.categoryId}
            >

              <option value="" default disabled hidden>Выбрать категорию</option>
              {categories && categories?.map((el) => (
                <option
                  key={el.id}
                  value={el.id}
                >
                  {el.title}
                </option>
              ))}
            </select>
        
            <div className="fadeIn fifth">
              <Checkbox
                {...label}
                name="privateWish"
                checked={priv === true}
                onChange={changeHandler}
                onClick={() => setPriv(!priv)}
                value={priv === true}
              />
              Приватное желание
            </div>
            <input type="submit" className="fadeIn sixth" value="Редактировать" />
          </form>
        </div>
      </div>
    </>

  );
}
