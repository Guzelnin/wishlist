import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Badge, Button, ButtonGroup } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { red } from '@mui/material/colors';
import { getFriendsAsync } from '../../redux/actions/friendsActions';
import FriendsList from './FriendsList';
import Requests from './Requests';
import FriendSearch from './FriendSearch';
import { getRequestsAsync } from '../../redux/actions/friendRequestActions';
import { getMyRequestsAsync } from '../../redux/actions/myFriendRequestActions';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
}));

export default function FriendsPage() {
  const [pageComp, setPageComp] = useState('friends');
  const friends = useSelector((state) => state.friends);
  const friendRequests = useSelector((state) => state.friendRequests);
  const myRequests = useSelector((state) => state.myRequests);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFriendsAsync());
    dispatch(getRequestsAsync());
    dispatch(getMyRequestsAsync());
  }, []);
  return (
    <Box sx={{ flexGrow: 1 }} style={{ marginTop: '10px', marginBottom: '300px' }}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Item>
            <ButtonGroup
              orientation="vertical"
              aria-label="vertical contained button group"
              variant="text"
            >
              <Button key="one" variant={pageComp === 'friends' ? 'contained' : 'text'} onClick={() => setPageComp('friends')} color="success">Мои друзья</Button>
              <Button
                key="two"
                variant={pageComp === 'requests' ? 'contained' : 'text'}
                onClick={() => setPageComp('requests')}
                color="success"
              >
                <Badge
                  // anchorOrigin={{
                  //   vertical: 'bottom',
                  //   horizontal: 'right',
                  // }}
                  color="warning"
                  badgeContent={friendRequests.length}
                >
                  Заявки в друзья
                </Badge>
              </Button>
              <Button key="three" variant={pageComp === 'search' ? 'contained' : 'text'} onClick={() => setPageComp('search')} color="success">Добавить в друзья</Button>
            </ButtonGroup>
          </Item>
        </Grid>
        <Grid item xs={8}>
          <Item>
            {pageComp === 'friends'
            && <FriendsList friends={friends} />}
            {pageComp === 'requests'
            && <Requests friendRequests={friendRequests} />}
            {pageComp === 'search'
            && (
            <FriendSearch
              friends={friends}
              friendRequests={friendRequests}
              myRequests={myRequests}
            />
            )}
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
