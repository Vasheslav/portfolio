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
    <div className={css.box}>
      <label>
        <input type="checkbox" onClick={toggleMenu} />
        <div className={css.checkmark}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </label>

      {/* {isMenuOpen && <MobileMenu />} */}
      {isMenuOpen && <MobileMenu onClose={toggleMenu} />}
    </div>
  );
};

export default ButtonMobileMenu;
