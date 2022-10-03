import { useDispatch } from 'react-redux';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Typography from '@mui/material/Typography';
import { setGiftsToMeAsync } from '../../../redux/actions/myWishesAction';

export default function GiftsForMe({ allMyGifts }) {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(setGiftsToMeAsync());
  }, []);
  return (

    <ImageList sx={{ width: 500, height: 450 }}>
      {allMyGifts.map((item) => (
        <ImageListItem key={item.Wish.photo}>
          <img
            src={item.Wish.photo}
            srcSet={`${item.Wish.photo}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.Wish.name}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.Wish.name}
            subtitle={(
              <span>
                Подарено:
                {' '}
                {item.Gifts.giver_id}
              </span>
)}
            position="below"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}
