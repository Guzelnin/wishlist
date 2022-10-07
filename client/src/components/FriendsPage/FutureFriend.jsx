import React, { useEffect, useState } from 'react';
import {
  Avatar, Button, List, ListItem, ListItemAvatar, ListItemText,
} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { useDispatch, useSelector } from 'react-redux';
import { getMyRequestsAsync, sendRequestAsync } from '../../redux/actions/myFriendRequestActions';
import { acceptRequest } from '../../redux/actions/friendRequestActions';

function areFriends(futureFriendId, oldFriends) {
  const result = oldFriends.find((el) => el.id === futureFriendId);
  return result !== undefined;
}

function requestHasBeenSent(futureFriendId, requests) {
  const result = requests.find((el) => el.id === futureFriendId);
  return result !== undefined;
}

function requestHasBeenReceived(futureFriendId, requests) {
  const result = requests.find((el) => el.id === futureFriendId);
  return result !== undefined;
}

export default function FutureFriend({
  futureFriend, oldFriends, myRequests, friendRequests,
}) {
  const dispatch = useDispatch();
  const [friendStatus, setFriendStatus] = useState(areFriends(futureFriend.id, oldFriends));
  const [requestStatus, setRequestStatus] = useState(
    requestHasBeenSent(futureFriend.id, myRequests),
  );
  const clickHandler = (e) => {
    e.preventDefault();
    if (requestHasBeenReceived(futureFriend.id, friendRequests)) {
      dispatch(acceptRequest(futureFriend.id));
      setFriendStatus(true);
    } else {
      dispatch(sendRequestAsync(futureFriend.id));
      setRequestStatus(true);
    }
  };
  return (
    <ListItem
      secondaryAction={
        friendStatus ? (
          <Button
            variant="outlined"
            startIcon={<PersonIcon />}
            style={{ marginRight: '10px' }}
            color="success"
          >
            Уже в друзьях
          </Button>
        )
          : (requestStatus
            ? (
              <Button
                variant="outlined"
                startIcon={<PersonIcon />}
                style={{ marginRight: '10px' }}
                color="success"
              >
                Заявка отправлена
              </Button>
            )
            : (
              <Button
                variant="contained"
                startIcon={<PersonAddIcon />}
                style={{ marginRight: '10px' }}
                onClick={clickHandler}
                color="success"
              >
                Добавить
              </Button>
            )
          )
      }

    >
      <ListItemAvatar>
        <Avatar alt="futureFriend" src={futureFriend.photo} />
      </ListItemAvatar>
      <ListItemText
        primary={futureFriend.name}
      />
    </ListItem>
  );
}
