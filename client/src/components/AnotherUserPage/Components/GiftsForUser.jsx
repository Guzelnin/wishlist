import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { setGiftsForUserAsync } from '../../../redux/actions/anotherWishesActions';

export default function GiftsForUser({ giftsForUser }) {
  const { id } = useParams();
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(setGiftsForUserAsync(id));
  }, []);
  return (
    <ImageList sx={{ width: 500, height: 450 }}>
      {giftsForUser && giftsForUser?.map((item) => (
        <ImageListItem key={item?.id}>
          <img
            src={`${item?.Owner?.Wish?.photo}?w=248&fit=crop&auto=format`}
            srcSet={`${item?.Owner?.Wish?.photo}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item?.Owner?.Wish?.name}
            loading="lazy"
          />
          <ImageListItemBar
            title={item?.Owner?.Wish?.name}
            subtitle={(
              <span>
                Подарок от:
                {' '}
                {item?.Owner?.User?.name}
              </span>
)}
            position="below"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}
