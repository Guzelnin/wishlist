import * as React from 'react';
import { useNavigate } from 'react-router-dom';

function PresentCard({ el }) {
  const navigate = useNavigate();
  return (
    <div id="card">
      <img src={process.env.REACT_APP_BASEURL + el.Wish.photo} alt="" />
      <div id="content">
        {el.Wish.name}
        <ol>
          <li> 
            {' '}
            {`Категория: ${el.Wish.Category.title}`}
          </li>
        </ol>
        <div id="price">
          <button onClick={() => navigate(`/wishes/${el.Wish.id}/copy`)}> Добавить к себе </button>
        </div>
      </div>
    </div>
  );
}

export default PresentCard;
