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
        <label>
          <input type="checkbox" />
          <div
            className={`${css.checkmark} ${isMenuOpen ? css.open : ''}`}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </label>
      </div>

      {isMenuOpen && (
        <MobileMenu onClose={toggleMenu} isMenuOpen={isMenuOpen} />
      )}
    </div>
  );
};

export default ButtonMobileMenu;
