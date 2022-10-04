import React from 'react';
import Social from './Social';

const url = 'https://thumbs.dreamstime.com/b/литерность-вектора-руки-wishlist-вычерченная-145269082.jpg';

export default function MyFooter() {
  return (
    <footer className="footer-distributed">
      <div className="footer-left">
        <img src={url} alt="logo" className="logo" />

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
          <p>
            <span>
              ул.Орджоникидзе, д. 11 стр.10 
            </span>
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
          <span>About the company</span>
          Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
        </p>

        <div className="footer-icons">

          {/* <a href="#"><i className="fa fa-facebook" /></a>
          <a href="#"><i className="fa fa-twitter" /></a>
          <a href="#"><i className="fa fa-linkedin" /></a>
          <a href="#"><i className="fa fa-github" /></a> */}
          <Social />
        </div>

      </div>

    </footer>
  );
}
