import * as React from 'react';
import Avatar from '@mui/material/Avatar';

export default function UserDescription({ userPage }) {
  return (

    <div className="row d-flex justify-content-center">
      
      <div className="col-md-12">
        
        <div className="card p-3 py-4">
         
          <div className="text-center">
            <Avatar
              alt="Remy Sharp"
              src={userPage?.photo} 
              sx={{ width: 200, height: 200 }}
              style={{ marginLeft: '42%' }}
            />
          </div>
            
          <div className="text-center mt-3">
            <h5 className="mt-2 mb-2" style={{ fontSize: '50px' }}> 
              {' '}
              {userPage?.name}
            </h5>
                
            <div className="px-4 mt-1">
              <p className="fonts" style={{ fontSize: '30px' }}>{userPage?.description}</p>
                
            </div>
            <div className="px-4 mt-1">
              <p className="fonts" style={{ fontSize: '20px' }}>
                День рождения:
                        
                {' '}
                {userPage?.bday}

              </p>
            </div>
                
          </div>
            
        </div>
        
      </div>
    
    </div>
  // <div>
  //   <div>
  //     <div>
  //       <Avatar
  //         alt="My avatar"
  //         src={userPage?.photo}
  //         sx={{ width: 250, height: 250 }}
  //         style={{ marginTop: '60px' }}
  //       />
  //       <div>
  //         <h3 style={{ marginTop: '60px', marginBottom: '20px' }}>
  //           {userPage?.name}
  //         </h3>
  //         <h5>
  //           {userPage?.description}
  //         </h5>
  //         <h6>
  //           День рождения:
  //           {' '}
  //           {userPage?.bday}
  //         </h6>
  //       </div>
  //     </div>
  //   </div>
  // </div>
  );
}
