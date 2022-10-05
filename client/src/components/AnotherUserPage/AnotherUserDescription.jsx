import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { useDispatch, useSelector } from 'react-redux';
import { Button, CardContent, Typography } from '@mui/material';
import { Col, Row } from 'reactstrap';
import { useParams } from 'react-router-dom';
import { getPage } from '../../redux/actions/anotherPageActions';

export default function AnotherUserDescription() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const thisPage = useSelector((state) => state.anotherPage);
  React.useEffect(() => {
    dispatch(getPage(id));
  }, []);
  console.log(thisPage);
  return (
    <Row>
      <Col>
        <Stack direction="row" spacing={2}>
          <Avatar
            alt="My avatar"
            src={thisPage.photo}
            sx={{ width: 250, height: 250 }}
            style={{ marginTop: '60px' }}
          />
          <CardContent style={{ marginLeft: '100px' }}>
            <Typography variant="h3" component="h2" style={{ marginTop: '60px', marginBottom: '20px' }}>
              {thisPage?.name}
            </Typography>
            <Typography variant="body1" gutterBottom>
              {thisPage?.description}
            </Typography>
            <Typography variant="h6" gutterBottom>
              День рождения:
              {' '}
              {thisPage?.bday}
            </Typography>
            <Row>
              <Col>
                <Button variant="contained">Добавить в друзья</Button>
              </Col>
              {/* <Col>
                <Button variant="contained">Друзья</Button>
              </Col> */}
            </Row>
            
          </CardContent>
        </Stack>
      </Col>
    </Row>
  );
}
