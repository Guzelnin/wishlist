import * as React from 'react';

function PresentCard({ el }) {
  return (
 
    <div id="card">
      <img src={el.photo} alt="" />
      <div id="content">
        {el.name}
        <ol>
          <li> 
            {' '}
            {`Категория: ${el.Category.title}`}
          </li>
        </ol>
        <div id="price">
          <button> Добавить к себе </button>
        </div>
      </div>
    </div>

  );
}

export default PresentCard;
