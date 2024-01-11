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
    <div className={css.conteiner}>
      <label className={css.container}>
        <input type="checkbox" onClick={toggleMenu} />
        <div className={css.checkmark}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </label>

      {isMenuOpen && <MobileMenu />}
    </div>
  );
};

export default ButtonMobileMenu;
