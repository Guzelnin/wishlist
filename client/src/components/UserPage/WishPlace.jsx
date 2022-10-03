import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMyWishesAsync } from '../../redux/actions/myWishesAction';
import OneWishCard from './OneWishCard';

export default function WishPlace() {
  const dispatch = useDispatch();
  const myWish = useSelector((state) => state.myWishes);
  useEffect(() => {
    dispatch(getMyWishesAsync());
  }, []);
  return (
    <div className="row">

      {/* {myWish && myWish?.map((el) => (
        <OneWishCard
          myWish={el}
          key={el.id}
          id={el.id}
        />
      ))} */}
      {/* <Item>
        {pageComp === 'friends'
            && <FriendsList friends={friends} />}
        {pageComp === 'requests'
            && <Requests friendRequests={friendRequests} />}
        {pageComp === 'search'
            && <FriendSearch />}
      </Item> */}
    </div>
  );
}