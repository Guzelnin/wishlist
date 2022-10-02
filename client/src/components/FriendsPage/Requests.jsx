import {
  Avatar, Button, IconButton, List, ListItem, ListItemAvatar, ListItemText,
} from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import DeleteIcon from '@mui/icons-material/Delete';
import React from 'react';
import { useDispatch } from 'react-redux';
import { acceptRequest, addFriend, declineRequest } from '../../redux/actions/friendRequestActions';

export default function Requests({ friendRequests }) {
  const dispatch = useDispatch();
  return (
    <List>
      {friendRequests && friendRequests.length !== 0
      && friendRequests?.map((el) => (
        <ListItem
          key={el.id}
          secondaryAction={(
            <>
              <Button
                variant="contained"
                startIcon={<PersonAddIcon />}
                style={{ marginRight: '10px' }}
                onClick={() => dispatch(acceptRequest(el.id))}
              >
                Добавить
              </Button>
              <Button
                variant="outlined"
                startIcon={<DeleteIcon />}
                onClick={() => dispatch(declineRequest(el.id))}
              >
                Отклонить
              </Button>
            </>
                  )}
        >
          <ListItemAvatar>
            <Avatar alt="futureFriend" src={el.photo} />
          </ListItemAvatar>
          <ListItemText
            primary={el.name}
          />
        </ListItem>
      ))}
    </List>
  );
}
