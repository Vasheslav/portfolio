import React from 'react';
import { Link } from 'react-router-dom';

import css from './portfolioList.module.scss';

const PortfolioList = ({ projects }) => {
  return (
    <ul className={css.list}>
      {projects.map(project => (
        <li key={project.id} className={css.projectItem}>
          <Link
            to={`${project.id}`}
            className={css.projectCard}
            data-title={project.title}
          >
            <img
              src={project.img}
              alt={project.title}
              className={css.projectImage}
            />
            <div className={css.overlay}>
              <button className={css.moreButton}>more...</button>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default PortfolioList;
