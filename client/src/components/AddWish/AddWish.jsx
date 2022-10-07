import { Checkbox } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getCategoriesAsync } from '../../redux/actions/categoriesActions';
import { addWishAsync, getMyWishesAsync } from '../../redux/actions/myWishesAction';

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
    e.preventDefault();
    const data = new FormData();
    data.append('name', inputs.name);
    data.append('link', inputs.link);
    data.append('photo', inputs.photo);
    data.append('categoryId', inputs.categoryId);
    data.append('description', inputs.description);
    data.append('privateWish', inputs.privateWish);
    data.append('date', inputs.date);
    dispatch(addWishAsync(data));
    dispatch(getMyWishesAsync());
    setInputs({});
    navigate('/mypage');
  };    
  return (
    <div className="wrapper fadeInDown">
      <div id="formContent">
        <h2 className="active">Добавление подарка </h2>
        <div className="fadeIn first">
          <img src="logo192.png" id="icon" alt="User Icon" />
        </div>
        <form onSubmit={submitHandler} autoComplete="off">
          <input
            id="outlined-basic"
            type="text"
            className="fadeIn second"
            placeholder="Название"
            required
            name="name"
            onChange={changeHandler}
            value={inputs.name}
          />
          <input
            id="outlined-basic"
            placeholder="Ссылка"
            type="text"
            className="fadeIn third"
            required
            name="link"
            onChange={changeHandler}
            value={inputs.link}
          />
          <div className="fadeIn fourth">
            Загрузить фото
            {/* <button className="fadeIn fourth"> */}
            <input
              className="fadeIn fourth"
              name="photo"
              onChange={inputHandlerPhoto}
              id="outlined-basic"
              multiple
              type="file"
              placeholder="Файл"
            />
            {/* </button> */}
          </div>
          <select
            id="selection"
            className="fadeIn seventh"
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
          <input
            className="fadeIn sixth"
            id="outlined-basic"
            placeholder="Описание"
            required
            type="text"
            name="description"
            onChange={changeHandler}
            value={inputs.description}
          />
          <div className="fadeIn sixth">
            Дедлайн желания
            <input
              className="fadeIn seventh"
              type="date"
              name="date"
              onChange={changeHandler}
              value={inputs.date}
            />
          </div>
          <div className="fadeIn eight">
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
          <input type="submit" className="fadeIn eight" value="Добавить желание" />
        </form>
      </div>
    </div>
  );
}
