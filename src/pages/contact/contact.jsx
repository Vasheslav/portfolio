import React from 'react';
import { Link } from 'react-router-dom';

// import ButtonMobileMenu from '../../components/buttonMobileMenu/buttonMobileMenu';
import css from './contact.module.scss';

const Contact = () => {
  return (
    <div className={css.conteiner}>
      {/* <ButtonMobileMenu /> */}

      <Link
        to="/projects"
        className={`${css.nav_button} ${css.nav_button_left} ${css.custom_button_left}`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          data-name="Layer 1"
          viewBox="0 0 24 24"
          height="60px"
          width="50px"
          fill="white"
        >
          <path d="M17.267 23.888 6.439 13.061C6.156 12.778 6 12.401 6 12s.156-.777.439-1.061L17.267.112l.707.707L7.146 11.646a.5.5 0 0 0 0 .708l10.827 10.827-.707.707Z" />
        </svg>
        <span className={`${css.button_text} ${css.button_text_left}`}>
          portfolio
        </span>
      </Link>
    </div>
  );
};

export default Contact;
