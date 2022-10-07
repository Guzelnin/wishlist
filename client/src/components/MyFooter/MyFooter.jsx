import React from 'react';
import Social from './Social';

const url = '/Users/makedonskyy/Desktop/phase-3/project/wishlist/client/public/logo192.png';
export default function MyFooter() {
  return (
    <footer className="footer-distributed">
      <div className="footer-left">
        <img src="logo192.png" alt="logo" className="logo" />

        {/* <p className="footer-links">
          <a href="#" className="link-1">Home</a>
          <a href="#">Blog</a>
          <a href="#">Pricing</a>
          <a href="#">About</a>
          <a href="#">Faq</a>
          <a href="#">Contact</a>
        </p> */}

        <p className="footer-company-name">ElbrusBootCamp © 2022</p>
      </div>

      <div className="footer-center">

        <div>
          <i className="fa fa-map-marker" />
          <p className="footer-company-about">
            <span>
              Контакты
              {' '}

            </span>
            
            ул.Орджоникидзе, д. 11 стр.10 
            {' '}
            <br /> 
          
            {' '}
            Москва, Россия
          </p>
        </div>

        <div>
          <i className="fa fa-phone" />
          <p>+7 499 938 68 24</p>
        </div>

        <div>
          <i className="fa fa-envelope" />
          <p><a href="mailto:support@company.com">info@elbrusboot.camp</a></p>
        </div>

      </div>

      <div className="footer-right">

        <p className="footer-company-about">
          <span>О нас</span>
          Для чего нужен список желаний?
          <br />
          Чтобы не забыть, что вы хотите купить.
          <br />
          Чтобы ваши друзья знали, что подарить вам.
          <br />
          Чтобы вы знали, что хотят ваши друзья.
          <br />
        </p>

        <div className="footer-icons">
          <Social />
        </div>

      </div>

    </footer>
  );
}
