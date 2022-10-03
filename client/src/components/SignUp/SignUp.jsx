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
          <img src="https://thumbs.dreamstime.com/b/литерность-вектора-руки-wishlist-вычерченная-145269082.jpg" id="icon" alt="User Icon" />
        </div>
        <Form
          onSubmit={(e) => {
            console.log(Object.fromEntries(new FormData(e.target)));
            dispatch(signupUser(e, Object.fromEntries(new FormData(e.target))));
            navigate('/');
          }}
        >
          <input type="text" id="name" className="fadeIn second" name="name" placeholder="name" />
          <input type="text" id="email" className="fadeIn third" name="email" placeholder="email" />
          <input type="text" id="password" className="fadeIn fourth" name="password" placeholder="password" />
          <input type="text" id="photo" className="fadeIn fifth" name="photo" placeholder="photo" />
          <input type="date" id="bday" className="fadeIn sixth" name="bday" placeholder="birthday" />
          <input type="text" id="description" className="fadeIn seventh" name="description" placeholder="description" />
          <input type="submit" className="fadeIn eight" value="Sign Up" />
        </Form>

      </div>
    </div>

  );
}
