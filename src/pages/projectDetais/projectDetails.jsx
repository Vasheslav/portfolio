import React from 'react';
import { useParams } from 'react-router-dom';
import ProjectsData from '../../components/projectsData';
import Slider from 'components/slikImg/slikImg';

import css from './projectDetails.module.scss';

const ProjectDetails = () => {
  const { projectId } = useParams();

  const project = ProjectsData.find(p => p.id.toString() === projectId);

  return (
    <div className={css.container}>
      <div className={css.projectCard}>
        <h1 className={css.title}>{project.title}</h1>

        <button className={css.pushable}>
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            <span className={css.shadow}></span>
            <span className={css.edge}></span>
            <span className={css.front}>VISIT THE WEBSITE</span>
          </a>
        </button>

        <Slider images={project.anotherImg} />

        <div className={css.box}>
          <h2 className={css.title2}>About this project</h2>
          <p className={css.text}>{project.description}</p>
          <h2 className={css.title2}>Role</h2>
          <ul className={css.list}>
            {project.role.map(role => (
              <li>
                <p
                  className={`${css.text} ${css.list_item} ${css.list_item_last}`}
                >
                  {role}
                </p>
              </li>
            ))}
          </ul>
          <h2 className={css.title2}>Technical Sheet</h2>
          <p className={css.text}>
            Code technologies I got involved with while working on this project.
          </p>
          <ul className={css.list}>
            {project.technologies.map(technologi => (
              <li className={css.projectItem}>
                <p className={`${css.text} ${css.list_item}`}>{technologi}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
