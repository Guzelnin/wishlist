import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import { getMyPage } from '../../redux/actions/pageAction';
import { checkAuth, logoutUserAsync } from '../../redux/actions/userActions';

function MyNavbar({ userName }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const logOut = () => {
    dispatch(logoutUserAsync());
  };
  // useEffect(() => {
 
  // }, [user]);
  
  const url = '/Users/makedonskyy/Desktop/phase-3/project/wishlist/client/public/logo192.png';

  return (

    <nav className="navbar">
       
      <div className="navbar-container container">
      
        <ul className="menu-items">
          <a href="/">
            <img className="imglogo" src="logo192.png" alt="logo" />
          </a>
          {user?.id && (
          <li> 
            {' '}
            <div className="header_username">
              Hello,
              {user?.name}
              !

            </div>
          </li>

          )}
          <li><Link to="/">Главная</Link></li>
          <li><Link to="/mypage">Мой список</Link></li>
          <li><Link to="/add-wish">Добавить желание</Link></li>
          {!user?.id && <li><Link to="/signup">Регистрация </Link></li>}
          {!user?.id && <li><Link to="/login">Войти</Link></li>} 
         
          {user?.id && <li><div className="header_logout" role="button" onClick={logOut}><a href="#">Выход</a></div></li>}
        
        </ul>

      </div>
    </nav>

  );
}
export default MyNavbar;
