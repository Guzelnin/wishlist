import * as React from 'react';
import Avatar from '@mui/material/Avatar';

export default function UserDescription({ userPage }) {
  return (
    <div>
      <div>
        <div>
          <Avatar
            alt="My avatar"
            src={userPage?.photo}
            sx={{ width: 250, height: 250 }}
            style={{ marginTop: '60px' }}
          />
          <div>
            <h3 style={{ marginTop: '60px', marginBottom: '20px' }}>
              {userPage?.name}
            </h3>
            <h5>
              {userPage?.description}
            </h5>
            <h6>
              День рождения:
              {' '}
              {userPage?.bday}
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
}
