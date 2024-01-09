import React from 'react';
import ProjectsData from '../../components/projectsData';
import menu from '../../img/menu.png';
import css from './portfolio.module.scss';

const Portfolio = () => {
  return (
    <div className={css.conteiner}>
      <img src={menu} alt="open_menu" className={css.icon_menu} />
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
