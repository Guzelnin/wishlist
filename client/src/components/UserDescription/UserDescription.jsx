import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { useDispatch, useSelector } from 'react-redux';
import { CardContent, Typography } from '@mui/material';
import { Col, Row } from 'reactstrap';
import { getMyPage } from '../../redux/actions/pageAction';

export default function UserDescription() {
  const dispatch = useDispatch();
  const myPage = useSelector((state) => state.page);
  React.useEffect(() => {
    dispatch(getMyPage());
  }, []);
  console.log(myPage);
  return (
    <Row>
      <Col>
        <Stack direction="row" spacing={2}>
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
              Lorem ipsum dolor sit amet,
              consectetur adipisicing elit.
              Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
              neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti?
              Eum quasi quidem quibusdam.
              {/* {myPage.description} */}
            </Typography>
            <Typography variant="h6" gutterBottom>
              День рождения:
              {' '}
              {myPage.bday}
            </Typography>
          </CardContent>
        </Stack>
      </Col>
    </Row>
  );
}
