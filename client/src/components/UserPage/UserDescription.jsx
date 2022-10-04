import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { useDispatch, useSelector } from 'react-redux';
import { Button, CardContent, Typography } from '@mui/material';
import { Col, Row } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import { getMyPage } from '../../redux/actions/pageAction';

export default function UserDescription() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const myPage = useSelector((state) => state.page);
  React.useEffect(() => {
    dispatch(getMyPage());
  }, []);
  React.useEffect(() => {
    dispatch(getMyPage());
  }, [myPage.name, myPage.email, myPage.password, myPage.description, myPage.bday, myPage.photo]);
  return (
    <Row>
      <Col>
        <Stack direction="row">
          <Avatar
            alt="My avatar"
            src={myPage.photo}
            sx={{ width: 250, height: 250 }}
            style={{ marginTop: '60px' }}
          />
          <CardContent style={{ marginLeft: '100px' }}>
            <Typography variant="h3" component="h2" style={{ marginTop: '60px', marginBottom: '20px' }}>
              {myPage.name}
            </Typography>
            <Typography variant="body1" gutterBottom>
              {myPage.description}
            </Typography>
            <Typography variant="h6" gutterBottom>
              День рождения:
              {' '}
              {myPage.bday}
            </Typography>
            <Row>
              {/* <Col> */}
              <Button onClick={() => navigate(`/users/${myPage.id}/edit`)} style={{ marginTop: '20px' }} variant="outlined">Редактировать</Button>
              <Button onClick={() => navigate('/friends')} style={{ marginTop: '20px' }} variant="contained">Друзья</Button>
              {/* </Col> */}
            </Row>
          </CardContent>
        </Stack>
      </Col>
    </Row>
  );
}
