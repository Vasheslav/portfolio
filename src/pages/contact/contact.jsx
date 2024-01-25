import React from 'react';
import { Link } from 'react-router-dom';

import ContactForm from 'components/contactForm/contactForm';
// import ButtonMobileMenu from '../../components/buttonMobileMenu/buttonMobileMenu';
import css from './contact.module.scss';

const Contact = () => {
  return (
    <div className={css.container}>
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

      <div className={css.flexBox}>
        <h1 className={css.title}>Get in touch</h1>
        <p className={css.text}>
          If you wanna get in touch, talk to me about a project collaboration or
          just say hi, fill up the awesome form below or send an email:{' '}
          <span>
            <a href="mailto:vasheslav@meta.ua" className={css.mail}>
              vasheslav@meta.ua
            </a>
          </span>{' '}
          to and ~let's talk.
        </p>

        <ContactForm />

        <h2 className={css.dobleTitle}>Or</h2>
        <p className={css.text}>Follow my profiles on GitHub and Linkedin.</p>

        <div className={css.buttonBox}>
          <button className={css.pushable}>
            <a
              href="https://github.com/Vasheslav"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={css.shadow}></span>
              <span className={css.edge}></span>
              <span className={css.front}>GitHub</span>
            </a>
          </button>

          <button className={css.pushable}>
            <a
              href="https://www.linkedin.com/in/viacheslav-rashnyk-7b3825271/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={css.shadow}></span>
              <span className={css.edge}></span>
              <span className={css.front}>Linkedin</span>
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
