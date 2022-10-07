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
    <div className="MyCardEditDiv">
      <div className="MyCardEdit">
        <div className="MyCardEditName">
          <h5>{wish?.name}</h5>
        </div>
        <div id="rigth">
          <img src={process.env.REACT_APP_BASEURL + wish?.photo} alt="wish" width="75%" />
        </div>
      </div>
      <div className="wrapper_edit fadeInDown">
        <div id="formContent">
          <h2 className="active"> Редактирование </h2>
          <div className="fadeIn first">
            {/* <img src="logo192.png" id="icon" alt="User Icon" /> */}
          </div>
          <form onSubmit={submitHandler} autoComplete="off">
            <div className="fadeIn second">
              Дедлайн подарка
              <input
                className="fadeIn second"
                type="date"
                name="date"
                onChange={changeHandler}
                value={inputs.date}
              />
            </div>
            <input
              autoComplete="off"
              className="fadeIn third"
              id="outlined-basic"
              placeholder="Описание"
              required
              type="text"
              name="description"
              onChange={changeHandler}
              value={inputs.description}
            />
            <select
              id="selection"
              className="fadeIn fourth"
              name="categoryId"
              onChange={changeHandler}
              value={inputs.categoryId}
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
            <input type="submit" className="fadeIn sixth" value="Добавить желание" />
          </form>
        </div>
      </div>
    </div>
  );
}
