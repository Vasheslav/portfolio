import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
// import ButtonMobileMenu from '../buttonMobileMenu/buttonMobileMenu';

import css from './mobileMenu.module.scss';

const MobileMenu = ({ onClose, isMenuOpen }) => {
  const handleKeyDown = event => {
    if (event.key === 'Escape') {
      onClose();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className={css.mobileMenu}>
      <div className={css.mobaleMenu_container}>
        {/* <ButtonMobileMenu /> */}
        <button
          className={`${css.checkmark} ${isMenuOpen ? css.open : ''}`}
          onClick={onClose}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className={css.mobaleMenu_flex}>
          <ul className={css.list}>
            <li className={css.link} onClick={onClose}>
              <Link to="/" className={css.text}>
                about
              </Link>
            </li>
            <li className={css.link} onClick={onClose}>
              <Link to="/projects" className={css.text}>
                portfolio
              </Link>
            </li>
            <li className={css.link} onClick={onClose}>
              <Link to="/contact" className={css.text}>
                contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
