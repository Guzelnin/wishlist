import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Form } from 'reactstrap';
import { loginUser } from '../../redux/actions/userActions';

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div className="wrapper fadeInDown">
      <div id="formContent">
        <h2 className="active"> Вход </h2>
        <div className="fadeIn first">
          <img src="logo192.png" id="icon" alt="User Icon" />
        </div>
        <Form
          autoComplete="off"
          onSubmit={(e) => {
            dispatch(loginUser(e, Object.fromEntries(new FormData(e.target))));
            navigate('/');
          }}
        >
          <input type="text" id="name" className="fadeIn second" name="email" placeholder="email" />
          <input type="password" id="email" className="fadeIn third" name="password" placeholder="Пароль" />
          <input type="submit" className="fadeIn eight" value="Войти" />
        </Form>

      </div>
    </div>
  );
}
