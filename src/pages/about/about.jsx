import React from 'react';
import { Link } from 'react-router-dom';

import ButtonMobileMenu from '../../components/buttonMobileMenu/buttonMobileMenu';
import telegram from '../../img/telegram.png';
import github from '../../img/github.png';
import linkedin from '../../img/linkedin.png';
import css from './about.module.scss';

const About = () => {
  return (
    <div className={css.container}>
      <ButtonMobileMenu />

      <Link
        to="/projects"
        className={`${css.nav_button} ${css.nav_button_right} ${css.custom_button}`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          data-name="Layer 1"
          viewBox="0 0 24 24"
          height="35px"
          width="25px"
        >
          <path d="m6.733 23.888-.707-.707 10.827-10.827a.5.5 0 0 0 0-.708L6.026.819l.707-.707L17.56 10.939c.283.283.439.66.439 1.061s-.156.777-.439 1.061L6.733 23.888Z" />
        </svg>
        <span className={css.button_text}>portfolio</span>
      </Link>

      <h1 className={css.tittle}>Hello, my name is Viacheslav Rashnyk</h1>
      <p className={css.text}>
        I am beginer Full Stack Developer. Feel free to take a look at my
        projects on the web portfolio page.
      </p>
      <button className={css.button}>
        <span>About Me</span>
        <svg viewBox="0 0 13 10" height="10px" width="15px">
          <path d="M1,5 L11,5"></path>
          <polyline points="8 1 12 5 8 9"></polyline>
        </svg>
      </button>

      <ul className={css.wrapper}>
        <li className={`${css.icon} ${css.github}`}>
          <span className={css.tooltip}>Github</span>
          <a href="https://github.com/Vasheslav">
            <img src={github} alt="github" className={css.icon_contact} />
          </a>
        </li>
        <li className={`${css.icon} ${css.linkedin}`}>
          <span className={css.tooltip}>Linkedin</span>
          <a href="https://www.linkedin.com/in/viacheslav-rashnyk-7b3825271/">
            <img src={linkedin} alt="linkedin" className={css.icon_contact} />
          </a>
        </li>
        <li className={`${css.icon} ${css.telegram}`}>
          <span className={css.tooltip}>Telegram</span>
          <a href="https://t.me/viasheslav_r">
            <img src={telegram} alt="telegram" className={css.icon_contact} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default About;
