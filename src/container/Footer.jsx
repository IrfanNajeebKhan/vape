import React from "react";
import '../assets/scss/main.scss';
import '../assets/scss/globle.scss';
import {Link } from 'react-router-dom';
import companyLogo from '../assets/images/logo.png';
import companycard from '../assets/images/cards.png';

const Footer = () => {
  return (
    <>
      <footer id="main_footer">
        <div className="container">
          <div className="footer_top_wrap">
            <div className="col col1">
              <Link to="https://uatlink.com/vape-site/">
                <img src={companyLogo} alt="no" />
              </Link>
              <p>
                Maecenas nisl diam, laoreet ac ullamcorper vitae, lobortis non
                purus. Donec eleifend luctus odio, porttitor maximus ligula
                iaculis eu. Aliquam quis mollis dolor, nec venenatis lectus.
                Quisque blandit ipsum
              </p>
            </div>
            <div className="col col2">
              <h4>Quick Links</h4>
              <ul className="menu_wrap">
                <li>
                  <Link to="">Home</Link>
                </li>
                <li>
                  <Link to="">Shop</Link>
                </li>
                <li>
                  <Link to="">About</Link>
                </li>
                <li>
                  <Link to="">FAQ's</Link>
                </li>
                <li>
                  <Link to="">Contact</Link>
                </li>
              </ul>
            </div>
            <div className="col col3">
              <h4>Categories</h4>
              <ul className="menu_wrap">
                <li>
                  <Link to="">Vape</Link>
                </li>
                <li>
                  <Link to="">Alcohol</Link>
                </li>
              </ul>
            </div>
            <div className="col col4">
              <h4>Contact Info</h4>
              <div className="info">
                <span>
                  Phone
                  <Link to="tel:888-888-8888">888-888-8888</Link>
                </span>
              </div>
              <div className="info">
                <span>
                  Email
                  <Link to="mailto:admin@gmail.com">admin@gmail.com</Link>
                </span>
              </div>
            </div>
          </div>
          <div className="footer_bottom_wrap">
            <div className="col col1">
              <p>
                Copyrights 2022.{" "}
                <Link to="https://uatlink.com/vape-site/"> Pegasus</Link>. All
                Rights Reserved.
              </p>
            </div>
            <div className="col col2">
              <img src={companycard} alt="no" />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;