import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
  Avatar,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import { logoutUserAsync } from '../../redux/actions/userActions';
import Search from '../Search';

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(4),
    display: 'flex',
  },
  logo: {
    flexGrow: '1',
    cursor: 'pointer',
  },
  link: {
    textDecoration: 'none',
    color: 'white',
    fontSize: '20px',
    marginLeft: theme.spacing(5),
    '&:hover': {
      color: 'yellow',
      borderBottom: '1px solid white',
    },
  },
}));

function MyNavbar() {
  const classes = useStyles();

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const url = 'https://thumbs.dreamstime.com/b/литерность-вектора-руки-wishlist-вычерченная-145269082.jpg';

  return (
    <AppBar
      position="static"
      style={{
        background: '#2E3B55',

      }}
    >
      <CssBaseline />
      <Toolbar>
        <Avatar
          className={classes.rounded}
          variant="circular"
          alt="Logo image"
          src={url}
          style={{
            width: 80,
            height: 80,
            marginRight: 20,
          }}
        />
        {/* <Typography variant="h5" className={classes.logo}> */}
        {/* </Typography> */}
        <Link to="/mypage" className={classes.link}>
          Мой список
        </Link>
        <Link to="/add-wish" className={classes.link}>
          Добавить желание
        </Link>
        <div className={classes.navlinks}>
          <Link to="/" className={classes.link}>
            Главная
          </Link>
          <Search />

          {!user.id ? (
            <>
              {' '}
              <Link to="/signup" className={classes.link}>
                Регистрация
              </Link>
              <Link to="/login" className={classes.link}>
                Войти
              </Link>
            </>
          ) : (
            <>
              {' '}
              <div>
                Hello,
                {user.name}
                !
              </div>
              <Button onClick={() => dispatch(logoutUserAsync())}>Выйти</Button>
            </>
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
}
export default MyNavbar;
