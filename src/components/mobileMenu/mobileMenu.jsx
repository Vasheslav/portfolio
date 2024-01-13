import React from 'react';
import { Link } from 'react-router-dom';

import css from './mobileMenu.module.scss';

const MobileMenu = () => {
  return (
    <div>
      <ul className={css.list}>
        <li className={css.link}>
          <Link to="/" className={css.text}>
            about
          </Link>
        </li>
        <li className={css.link}>
          <Link to="/projects" className={css.text}>
            portfolio
          </Link>
        </li>
        <li className={css.link}>
          <Link to="/contact" className={css.text}>
            contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;
