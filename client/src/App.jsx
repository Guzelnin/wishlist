import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import AddWish from './components/AddWish';
import FriendsPage from './components/FriendsPage';
import HomePage from './components/HomePage';
import Login from './components/Login';
import MyFooter from './components/MyFooter';
import MyNavbar from './components/MyNavbar';
import SignUp from './components/SignUp';
import ProtectedRoute from './components/HOCs/ProtectedRoute';
import UserPage from './components/UserPage/UserPage';
import { checkAuth, getUserAsync } from './redux/actions/userActions';
import NoPage from './components/NoPage/NoPage';
import DetailWishPage from './components/DetailWishPage';
import EditDetailWishPage from './components/DetailWishPage/EditDetailWithPage';
import NewWishCopy from './components/NewWishCopy';
import UserPageEditing from './components/UserPageEditing';
import AnotherUserPage2 from './components/AnotherUserPage2';

function App({ el }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkAuth());
  }, []);
  const user = useSelector((state) => state.user);
  useEffect(() => {
    dispatch(getUserAsync());
  }, [user?.name]);
  return (
    <>
      <MyNavbar />
      <Routes>
        <Route element={<ProtectedRoute redirect="/login" isAllowed={!!user?.id} />}>
          <Route path="/mypage" element={<UserPage />} />
          <Route path="/add-wish" element={<AddWish />} />
        </Route>
        <Route element={<ProtectedRoute redirect="/mypage" isAllowed={!user?.id} />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>
        <Route path="/wishes/:id" element={<DetailWishPage />} />

        <Route path="/wishes/:id/edit" element={<EditDetailWishPage />} />

        <Route path="/wishes/:id/copy" element={<NewWishCopy />} />

        {/* ЗАЩИТИТЬ ПУТЬ К ПОДРОБНОЙ ИНФЕ ПО ПОДАРКУ */}
        <Route path="/" element={<HomePage user={user} />} />
        <Route path="/friends" element={<FriendsPage />} />
        <Route path="/users/:id/edit" element={<UserPageEditing />} />
        <Route path="*" element={<NoPage />} />
        <Route path="/:id" element={<AnotherUserPage2 />} />
        {/* <Route path="/test" element={<NavBarPage />} /> */}
      </Routes>
      {/* <Search details={initialDetails} /> */}
      <MyFooter />
    </>
  );
}

export default App;
