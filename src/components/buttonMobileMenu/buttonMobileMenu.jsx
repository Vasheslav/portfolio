import React from 'react';

// import MobileMenu from '../mobileMenu/mobileMenu';
import css from './buttonMobileMenu.module.scss';

const ButtonMobileMenu = ({ open, setOpen }) => {
  return (
    <button
      className={`${css.button} ${open ? css.open : ''}`}
      open={open}
      onClick={() => setOpen(!open)}
    >
      <div className={`${css.button__line} ${open ? css.open : ''}`}></div>
      <div className={`${css.button__line} ${open ? css.open : ''}`}></div>
      <div className={`${css.button__line} ${open ? css.open : ''}`}></div>
    </button>
  );
};

export default ButtonMobileMenu;
