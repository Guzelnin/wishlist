import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getAnotherUserPageAsync } from '../../redux/actions/anotherPageActions';
import { getAnotherUserWishes, getAnotherUserWishesAsync } from '../../redux/actions/anotherUserWishesActions';
import { getAnotherUserWishesFor, getAnotherUserWishesForAsync } from '../../redux/actions/anotherUserWishesForActions';
import { getAnotherUserWishesFromAsync } from '../../redux/actions/anotherUserWishesFromActions';
import For from './ComponentsOfPage/For';
import From from './ComponentsOfPage/From';
import Wishes from './ComponentsOfPage/Wishes';
import UserDescription from './UserDescription';
import UserNavBar from './UserNavBar';

export default function AnotherUserPage2() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [pageComp, setPageComp] = useState('userWishes');
  const anotherUser = useSelector((state) => state.anotherPage);
  const anotherUserWishes = useSelector((state) => state.anotherUserWishes);
  const anotherUserWishesFor = useSelector((state) => state.anotherUserWishesFor);
  const anotherUserWishesFrom = useSelector((state) => state.anotherUserWishesFrom);

  useEffect(() => {
    dispatch(getAnotherUserPageAsync(id));
    dispatch(getAnotherUserWishesAsync(id));
    dispatch(getAnotherUserWishesForAsync(id));
    dispatch(getAnotherUserWishesFromAsync(id));
  }, []);
  return (
    <div>
      <UserDescription userPage={anotherUser} />
      <UserNavBar setPageComp={setPageComp} />
      {pageComp === 'userWishes' && <Wishes wishes={anotherUserWishes} userId={id} />}
      {pageComp === 'wishesForUser' && <For wishes={anotherUserWishesFor} />}
      {pageComp === 'wishesFromUser' && <From wishes={anotherUserWishesFrom} />}
    </div>
  );
}
