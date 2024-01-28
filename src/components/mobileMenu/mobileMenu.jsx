import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import css from './mobileMenu.module.scss';

const MobileMenu = ({ open, onClose }) => {
  useEffect(() => {
    const handleEscape = event => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [onClose]);

  return (
    <div className={css.mobileMenu}>
      <ul className={`${css.list} ${open ? css.open : ''}`}>
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
  );
};

export default MobileMenu;
