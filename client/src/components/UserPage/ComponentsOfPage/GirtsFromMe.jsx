import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { useDispatch } from 'react-redux';
import { setGiftsFromMeAsync } from '../../../redux/actions/giftsAction';

export default function GirtsFromMe({ giftsFromMe }) {
  const dispatch = useDispatch();
  console.log(giftsFromMe[0].Gifts);
  React.useEffect(() => {
    dispatch(setGiftsFromMeAsync());
  }, []);
  console.log(giftsFromMe);
  return (
    <ImageList sx={{ width: 500, height: 450 }}>
      {giftsFromMe && giftsFromMe?.map((item) => (
        <ImageListItem key={item.Wish.photo}>
          <img
            src={`${item.Wish.photo}?w=248&fit=crop&auto=format`}
            srcSet={`${item.Wish.photo}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.Wish.name}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.Wish.name}
            subtitle={(
              <span>
                Кому подарил:
                {' '}
                {item.Gifts[0].giver_id}
              </span>
)}
            position="below"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}
