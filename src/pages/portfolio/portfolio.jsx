import React from 'react';
import ProjectsData from '../../components/projectsData';
// import menu from '../../img/menu.png';
import css from './portfolio.module.scss';

const Portfolio = () => {
  return (
    <div className={css.conteiner}>
      {/* <img src={menu} alt="open_menu" className={css.icon_menu} /> */}
      <button
        className={`${css.nav_button} ${css.nav_button_right} ${css.custom_button_right}`}
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
        <span className={`${css.button_text} ${css.button_text_right}`}>
          contact
        </span>
      </button>
      <button
        className={`${css.nav_button} ${css.nav_button_left} ${css.custom_button_left}`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          data-name="Layer 1"
          viewBox="0 0 24 24"
          height="35px"
          width="25px"
        >
          <path d="M17.267 23.888 6.439 13.061C6.156 12.778 6 12.401 6 12s.156-.777.439-1.061L17.267.112l.707.707L7.146 11.646a.5.5 0 0 0 0 .708l10.827 10.827-.707.707Z" />
        </svg>
        <span className={`${css.button_text} ${css.button_text_left}`}>
          about
        </span>
      </button>
      <h1 className={css.tittle}>Full Stack Developer Portfolio</h1>
      <p className={css.text}>
        Check out my front-end and back-end development portfolio projects.
      </p>

      <ul className={css.wrapper}>
        {ProjectsData.map(project => (
          <li key={project.id} className={css.projectItem}>
            <div className={css.projectCard}>
              <img
                src={project.img}
                alt={project.title}
                className={css.projectImage}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Portfolio;
