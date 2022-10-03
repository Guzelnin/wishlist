import React, { useEffect, useState } from 'react';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';

import {
  Col, Input, Row, Container, ListGroup, ListGroupItem,
} from 'reactstrap';
import InputBase from '@mui/material/InputBase';

import { useDispatch, useSelector } from 'react-redux';
import {
  Avatar, Button, List, ListItem, ListItemAvatar, ListItemText,
} from '@mui/material';
import { fetchEntries } from '../../redux/actions/entriesActions';
import FutureFriend from './FutureFriend';
import { getMyRequestsAsync } from '../../redux/actions/myFriendRequestActions';

// const Search = styled('div')(({ theme }) => ({
//   position: 'relative',
//   borderRadius: theme.shape.borderRadius,
//   backgroundColor: alpha(theme.palette.common.white, 0.15),
//   '&:hover': {
//     backgroundColor: alpha(theme.palette.common.white, 0.25),
//   },
//   marginLeft: 0,
//   width: '100%',
//   [theme.breakpoints.up('sm')]: {
//     marginLeft: theme.spacing(1),
//     width: 'auto',
//   },
// }));
// const SearchIconWrapper = styled('div')(({ theme }) => ({
//   padding: theme.spacing(0, 2),
//   height: '100%',
//   position: 'absolute',
//   pointerEvents: 'none',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
// }));

// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//   color: 'inherit',
//   '& .MuiInputBase-input': {
//     padding: theme.spacing(1, 1, 1, 0),
//     // vertical padding + font size from searchIcon
//     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//     transition: theme.transitions.create('width'),
//     width: '100%',
//     [theme.breakpoints.up('sm')]: {
//       width: '12ch',
//       '&:focus': {
//         width: '20ch',
//       },
//     },
//   },
// }));

export default function FriendSearch({ friends, myRequests, friendRequests }) {
  const entries = useSelector((state) => state.entries);
  const [input, setInput] = useState('');
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchEntries(input));
  }, [input]);
  return (
    <Container>
      <Row>
        <Col>
          <Input value={input} onChange={(e) => setInput(e.target.value)} />
        </Col>
      </Row>
      <Row>
        <List>
          {entries && entries.length !== 0 && entries?.map((el) => (
            <FutureFriend
              key={el.id}
              futureFriend={el}
              oldFriends={friends}
              myRequests={myRequests}
              friendRequests={friendRequests}
            />
          ))}
        </List>
      </Row>
    </Container>
  );
}
