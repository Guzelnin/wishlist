import { Container } from '@mui/system';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { useParams } from 'react-router-dom';
// import { setUserWishesAsync } from '../../redux/actions/anotherWishesActions';
import AnotherPageNavbar from './AnotherPageNavbar';
import AnotherUserDescription from './AnotherUserDescription';

export default function AnotherUserPage() {
  // const { id } = useParams();
  const dispatch = useDispatch();
  const anotherWishes = useSelector((state) => state.anotherWishes);
  const giftsForUser = useSelector((state) => state.anotherWishes);
  const giftsFromUser = useSelector((state) => state.anotherWishes);
  // React.useEffect(() => {
  //   dispatch(setUserWishesAsync(id));
  // }, []);
  return (
    <Container>
      <AnotherUserDescription />
      <AnotherPageNavbar anotherWishes={anotherWishes} giftsForUser={giftsForUser} giftsFromUser={giftsFromUser} />
    </Container>
  );
}
