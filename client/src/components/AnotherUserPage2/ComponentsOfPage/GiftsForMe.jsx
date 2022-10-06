import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { useDispatch } from 'react-redux';
import { setGiftsToMeAsync } from '../../../redux/actions/giftsAction';

export default function GiftsForMe({ wishes }) {
  // const dispatch = useDispatch();
  // React.useEffect(() => {
  //   dispatch(setGiftsToMeAsync());
  // }, []);
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '50px' }}>
      {wishes && wishes.length !== 0 && wishes?.map((el) => (
        <div key={el.id}>
          <img src={process.env.REACT_APP_BASEURL + el.Owner.Wish.photo} height="100px" alt="myWish" />
          <h6>{el.Owner.Wish.name}</h6>
          <div> 
            <p>Подарок от:</p>
            <p>{el.User.name}</p>
          </div>
        </div>
      ))}
    </div>

  //     <ImageList sx={{ width: 500, height: 450 }}>
  //       {allMyGifts && allMyGifts?.map((item) => (
  //         <ImageListItem key={item?.id}>
  //           <img
  //             src={`${item?.Owner?.Wish?.photo}?w=248&fit=crop&auto=format`}
  //             srcSet={`${item.Owner.Wish.photo}?w=248&fit=crop&auto=format&dpr=2 2x`}
  //             alt={item?.Owner?.Wish?.name}
  //             loading="lazy"
  //           />
  //           <ImageListItemBar
  //             title={item?.Owner?.Wish?.name}
  //             subtitle={(
  //               <span>
  //                 Подарок от:
  //                 {' '}
  //                 {item?.User?.name}
  //               </span>
  // )}
  //             position="below"
  //           />
  //         </ImageListItem>
  //       ))}
  //     </ImageList>
  );
}
