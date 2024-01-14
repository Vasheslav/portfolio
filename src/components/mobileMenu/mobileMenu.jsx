import React from 'react';
import { Link } from 'react-router-dom';
// import ButtonMobileMenu from '../buttonMobileMenu/buttonMobileMenu';

import css from './mobileMenu.module.scss';

const MobileMenu = ({ onClose }) => {
  return (
    <div>
      {/* <ButtonMobileMenu /> */}
      <ul className={css.list}>
        <li className={css.link}>
          <Link to="/" className={css.text} onClick={onClose}>
            about
          </Link>
        </li>
        <li className={css.link}>
          <Link to="/projects" className={css.text} onClick={onClose}>
            portfolio
          </Link>
        </li>
        <li className={css.link}>
          <Link to="/contact" className={css.text} onClick={onClose}>
            contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;
