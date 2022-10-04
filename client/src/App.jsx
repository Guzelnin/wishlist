import Search from '@mui/icons-material/Search';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Container } from 'reactstrap';
import AddWish from './components/AddWish';
import FriendsPage from './components/FriendsPage';
import HomePage from './components/HomePage';
import Login from './components/Login';
// import MyFooter from './components/MyFooter';
import MyNavbar from './components/MyNavbar';
import SignUp from './components/SignUp';
import ProtectedRoute from './components/HOCs/ProtectedRoute';
import UserPage from './components/UserPage/UserPage';
import { checkAuth } from './redux/actions/userActions';
import NoPage from './components/NoPage/NoPage';
import DetailWishPage from './components/DetailWishPage';
import AnotherUserPage from './components/AnotherUserPage/AnotherUserPage';
// import initialDetails from './components/Search/initialDetails';

function App({ el }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkAuth());
  }, []);
  const user = useSelector((state) => state.user);
  const anoterPage = useSelector((state) => state.anotherPage);
  return (
    <Container>
      <MyNavbar />
      <Routes>
        <Route element={<ProtectedRoute redirect="/login" isAllowed={!!user.id} />}>
          <Route path="/mypage" element={<UserPage />} />
          <Route path="/add-wish" element={<AddWish />} />
        </Route>
        <Route element={<ProtectedRoute redirect="/mypage" isAllowed={!user.id} />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>
        <Route path="/wishes/:id" element={<DetailWishPage />} />
        {/* ЗАЩИТИТЬ ПУТЬ К ПОДРОБНОЙ ИНФЕ ПО ПОДАРКУ */}
        <Route path="/" element={<HomePage />} />
        <Route path="/friends" element={<FriendsPage />} />
        <Route path="*" element={<NoPage />} />
        <Route path="/:id" element={<AnotherUserPage />} />
      </Routes>
      {/* <Search details={initialDetails} /> */}
      {/* <MyFooter /> */}
    </Container>
  );
}

export default App;
