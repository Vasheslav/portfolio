import React, { useState } from 'react';

import MobileMenu from '../mobileMenu/mobileMenu';
import css from './buttonMobileMenu.module.scss';

const ButtonMobileMenu = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
    console.log('Open');
  };

  return (
    <div>
      <div className={css.box}>
        <label className={css.hamburger}>
          <input type="checkbox" onClick={toggleMenu} />
          <svg viewBox="0 0 32 32">
            <path
              className={`${css.line} ${css.line_top_bottom}`}
              d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
            ></path>
            <path className={css.line} d="M7 16 27 16"></path>
          </svg>
        </label>
      </div>

      {isMenuOpen && (
        <MobileMenu onClose={toggleMenu} isMenuOpen={isMenuOpen} />
      )}
    </div>
  );
};

export default ButtonMobileMenu;
