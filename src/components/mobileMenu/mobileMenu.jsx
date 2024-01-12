import React from 'react';
import { Link } from 'react-router-dom';

import css from './mobileMenu.module.scss';

const MobileMenu = () => {
  return (
    <div>
      <ul className={css.list}>
        <li className={css.link}>
          <Link to="/">ABOUT</Link>
        </li>
        <li className={css.link}>
          <Link to="/projects">PORTFOLIO</Link>
        </li>
        <li className={css.link}>
          <Link to="/contact">CONTACT</Link>
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;
