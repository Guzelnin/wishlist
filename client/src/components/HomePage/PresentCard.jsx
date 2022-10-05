import * as React from 'react';
import { useNavigate } from 'react-router-dom';

function PresentCard({ el }) {
  const navigate = useNavigate();
  return (
    <div id="card" className="card">
      <img className="card_image" src={el.Wish.photo} alt="" />
      <div className="card__overlay">
        <div id="content">
          {el.Wish.name}
          <ol>
            <li> 
              {' '}
              {`Категория: ${el.Wish.Category.title}`}
            </li>
          </ol>
          <div id="add_button">
            <button onClick={() => navigate(`/wishes/${el.Wish.id}/copy`)}> Добавить к себе </button>
          </div>
        </div>
      </div>
    </div>

  );
}

export default PresentCard;
