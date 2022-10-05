import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import { logoutUserAsync } from '../../redux/actions/userActions';

function MyNavbar() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const logOut = () => {
    dispatch(logoutUserAsync());
  };

  const url = 'https://thumbs.dreamstime.com/b/литерность-вектора-руки-wishlist-вычерченная-145269082.jpg';

  return (

    <nav className="navbar">
       
      <div className="navbar-container container">
        {/* <div className="logo_nav">
          
            <a href="/">
              <img className="imglogo" src={url} alt="logo" />
              {' '}
              WishPlace
            </a>

          </div> */}
        <ul className="menu-items">
          <li><Link to="/">Главная</Link></li>
          <li><Link to="/mypage">Мой список</Link></li>
          <li><Link to="/add-wish">Добавить желание</Link></li>
          {!user.id && <li><Link to="/signup">Регистрация </Link></li>}
          {!user.id && <li><Link to="/login">Войти</Link></li>} 
          {user.id && (
          <li> 
            {' '}
            <div className="header_username">
              {/* <a href="#"> */}
              Hello,
              {user.name}
              !

            </div>
          </li>
          )}
          {user.id && <li><div className="header_logout" role="button" onClick={logOut}><a href="#">Выход</a></div></li>}
        
        </ul>

      </div>
    </nav>

  );
}
export default MyNavbar;
