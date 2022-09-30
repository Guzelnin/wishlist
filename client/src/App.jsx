import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import AddWish from './components/AddWish';
import HomePage from './components/HomePage';
import Login from './components/Login';
import MyFooter from './components/MyFooter';
import MyNavbar from './components/MyNavbar';
import Search from './components/Search';
import SignUp from './components/SignUp';
import UserPage from './components/UserPage/UserPage';
import { checkAuth } from './redux/actions/userActions';
import initialDetails from './components/Search/initialDetails';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkAuth());
  }, []);
  const user = useSelector((state) => state.user);
  return (
    <>
      <MyNavbar />
      {/* <Search details={initialDetails} /> */}
      <Routes>
        <Route path="/" element={<HomePage details={initialDetails} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/mypage" element={<UserPage />} />
        <Route path="/add-wish" element={<AddWish />} />
      </Routes>
      <MyFooter />

    </>
  );
}

export default App;
