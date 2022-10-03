import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { useDispatch } from 'react-redux';
import { setGiftsToMeAsync } from '../../../redux/actions/giftsAction';

export default function GiftsForMe({ allMyGifts }) {
  const dispatch = useDispatch();
  console.log(allMyGifts);
  React.useEffect(() => {
    dispatch(setGiftsToMeAsync());
  }, []);
  return (

    <ImageList sx={{ width: 500, height: 450 }}>
      {allMyGifts && allMyGifts?.map((item) => (
        <ImageListItem key={item.Owner.Wish.id}>
          <img
            src={`${item.Owner.Wish.photo}?w=248&fit=crop&auto=format`}
            srcSet={`${item.Owner.Wish.photo}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.Owner.Wish.name}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.Owner.Wish.name}
            subtitle={(
              <span>
                Кто подарил:
                {' '}
                {item.User.name}
              </span>
)}
            position="below"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}
