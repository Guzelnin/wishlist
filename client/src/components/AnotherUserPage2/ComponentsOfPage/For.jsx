import React from 'react';

export default function For({ wishes }) {
  return (
    <div className="home_bottom_all">
      <div className="cards">
        {wishes && wishes.length !== 0 && wishes?.map((el) => (
          <div key={el.id} id="card" className="card">
            <img src={process.env.REACT_APP_BASEURL + el.Owner.Wish.photo} height="100px" alt="myWish" />
            <div className="card__overlay">
              <div id="content"> 
                {el.Owner.Wish.name}
                <p>{`Подарок от: ${el?.User?.name}`}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
