import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import AddWish from './components/AddWish';
import HomePage from './components/HomePage';
import Login from './components/Login';
import MyNavbar from './components/MyNavbar';
import SignUp from './components/SignUp';
import { checkAuth } from './redux/actions/userActions';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkAuth());
  }, []);
  const user = useSelector((state) => state.user);
  return (
    <>
      <MyNavbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/add-wish" element={<AddWish />} />
      </Routes>
    </>
  );
}

export default App;
