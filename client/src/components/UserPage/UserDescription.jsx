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
    
    <div className="row d-flex justify-content-center">
      
      <div className="col-md-12">
          
        <div className="card p-3 py-4">
           
          <div className="text-center">
            <Avatar
              alt="My avatar"
              src={myPage?.photo} 
              sx={{ width: 200, height: 200 }}
              style={{ marginLeft: '42%' }}
            />
          </div>
              
          <div className="text-center mt-3">
            <h5 className="mt-2 mb-2" style={{ fontSize: '50px' }}> 
              {' '}
              {myPage?.name}
            </h5>
                  
            <div className="px-4 mt-1">
              <p className="fonts" style={{ fontSize: '30px' }}>{myPage?.description}</p>
                  
            </div>
            <div className="px-4 mt-1">
              <p className="fonts" style={{ fontSize: '20px' }}>
                День рождения:
                          
                {' '}
                {myPage?.bday}

              </p>
            </div>
                  
            <div className="buttons">
                      
              <button className="btn btn-outline-primary px-4" onClick={() => navigate('/friends')}>Друзья</button>
              <button className="btn btn-outline-secondary" onClick={() => navigate(`/users/${myPage?.id}/edit`)}>Редактировать</button>
            </div>
                  
          </div>
              
        </div>
          
      </div>
      
    </div>
  );
}
