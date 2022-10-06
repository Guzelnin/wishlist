import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import { useDispatch, useSelector } from 'react-redux';
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
    <div>
      <div>
        <div>
          <Avatar
            alt="My avatar"
            src={myPage.photo}
            sx={{ width: 250, height: 250 }}
            style={{ marginTop: '60px' }}
          />
          <div>
            <h3 style={{ marginTop: '60px', marginBottom: '20px' }}>
              {myPage.name}
            </h3>
            <h5>
              {myPage.description}
            </h5>
            <h6>
              День рождения:
              {' '}
              {myPage.bday}
            </h6>
            <div>
              <button onClick={() => navigate(`/users/${myPage.id}/edit`)} style={{ marginTop: '20px' }}>Редактировать</button>
              <button onClick={() => navigate('/friends')} style={{ marginTop: '20px' }}>Друзья</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
