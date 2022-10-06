import {
  Box,
  Button, Checkbox, FormControl, Grid,
  Input,
  InputLabel, MenuItem, Select, TextField,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, useNavigate } from 'react-router-dom';
import { getCategoriesAsync } from '../../redux/actions/categoriesActions';
import { addWishAsync } from '../../redux/actions/myWishesAction';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function AddWish() {
  const categories = useSelector((state) => state.categories);
  const [priv, setPriv] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategoriesAsync());
  }, []);
  const [inputs, setInputs] = useState({
    name: '', link: '', photo: null, categoryId: '', description: '', date: '', privateWish: false,
  });

  const inputHandlerPhoto = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.files[0] }));
  };

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
    // console.log(inputs);
    // dispatch(addWishAsync(inputs));
    e.preventDefault();
    const data = new FormData();
    data.append('name', inputs.name);
    data.append('link', inputs.link);
    data.append('photo', inputs.photo);
    data.append('category_id', inputs.categoryId);
    dispatch(addWishAsync(data));
    setInputs({});
    // dispatch(addWishAsync(inputs));
    navigate('/mypage');
  };
  console.log(inputs);
    
  return (
    <div className="wrapper fadeInDown">
      <div id="formContent">
        <h2 className="active">Добавление подарка </h2>
        <div className="fadeIn first">
          <img src="https://thumbs.dreamstime.com/b/литерность-вектора-руки-wishlist-вычерченная-145269082.jpg" id="icon" alt="User Icon" />
        </div>
        <form onSubmit={submitHandler} autoComplete="off">
  
          <input
            placeholder="Название"
            type="text"
            className="fadeIn second"
            label="Название желания"
            name="name"
            onChange={changeHandler}
            value={inputs.name}
          />
     
          <input
            placeholder="Ссылка" 
            type="text"
            className="fadeIn fourth"
            name="link"
            onChange={changeHandler}
            value={inputs.link}
          />
          <Button className="buttonFileUpload" variant="contained" component="label">
            Загрузить фото
            <input
              className="buttonFileUpload form-control"
              name="photo"
              onChange={inputHandlerPhoto}
                // eslint-disable-next-line react/jsx-no-duplicate-props
                // className="form-control"
              id="outlined-basic"
                // eslint-disable-next-line react/no-unknown-property
              variant="outlined"
              multiple
              type="file"
              // onChange={changeHandler}
              value={inputs.photo}
            />
          </Button>
 
          {/* <input
            type="text"
            className="fadeIn fifth"
            placeholder="Фото" 
            name="photo"
            onChange={changeHandler}
            value={inputs.photo}
          /> */}
          <input
            type="text"
            className="fadeIn sixth"
            placeholder="Описание" 
            name="description"
            onChange={changeHandler}
            value={inputs.description}
          />
          <div className="fadeIn sixth">
            Дедлайн желания
          </div>
          <input
            type="date"
            name="date"
            className="fadeIn seventh"
            onChange={changeHandler}
            value={inputs.date}
          />

          <select
            id="selection"
            className="fadeIn seventh"
            name="categoryId"
            onChange={changeHandler}
            value={inputs.categoryId}
          >
            <option value="" selected disabled hidden>Выбрать категорию</option>
            {categories && categories?.map((el) => (
              <option
                key={el.id}
                value={el.id}
              >
                {el.title}
              </option>
            ))}
          </select>

          <div className="fadeIn eight">
            <Checkbox
              {...label}
              className=""
              id="_checkbox"
              name="privateWish"
              checked={priv === true}
              onChange={changeHandler}
              onClick={() => setPriv(!priv)}
              value={priv === true}
            />
            Приватное желание
          </div>
          <input type="submit" className="fadeIn eight" value="Добавить желание" />
  
        </form>
      </div>
    </div>
  );
}
