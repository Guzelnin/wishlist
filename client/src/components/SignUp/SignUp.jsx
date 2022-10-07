import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Form } from 'reactstrap';
import { signupUser } from '../../redux/actions/userActions';

export default function SignUp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div className="wrapper fadeInDown">
      <div id="formContent">
        <h2 className="active"> Регистрация </h2>
        <div className="fadeIn first">
          <img src="logo192.png" id="icon" alt="User Icon" />
        </div>
        <Form
          autoComplete="off"
          onSubmit={(e) => {
            console.log(Object.fromEntries(new FormData(e.target)));
            dispatch(signupUser(e, Object.fromEntries(new FormData(e.target))));
            navigate('/');
          }}
        >
          <input type="text" id="name" className="fadeIn second" name="name" placeholder="Имя" />
          <input type="text" id="email" className="fadeIn third" name="email" placeholder="email" />
          <input type="password" id="password" className="fadeIn fourth" name="password" placeholder="Пароль" />
          <input type="text" id="photo" className="fadeIn fifth" name="photo" placeholder="Фото" />
          <input type="date" id="bday" className="fadeIn sixth" name="bday" placeholder="День Рождения" />
          <input type="text" id="description" className="fadeIn seventh" name="description" placeholder="Описание профиля" />
          <input type="submit" className="fadeIn eight" value="Зарегистрироваться" />
        </Form>

      </div>
    </div>

  );
}
