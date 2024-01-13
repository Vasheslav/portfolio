import React from 'react';
import { useParams } from 'react-router-dom';
import ProjectsData from '../../components/projectsData';

import css from './projectDetails.module.scss';

const ProjectDetails = () => {
  const { projectId } = useParams();

  const project = ProjectsData.find(p => p.id.toString() === projectId);

  return (
    <div className={css.container}>
      <div className={css.projectCard}>
        <h1 className={css.title}>{project.title}</h1>

        <button className={css.pushable}>
          <span className={css.shadow}></span>
          <span className={css.edge}></span>
          <span className={css.front}>VISIT THE WEBSITE</span>
        </button>

        {project.anotherImg.map(img => (
          <img src={img} alt={project.title} className={css.projectImage} />
        ))}
        <h2 className={css.title2}>About this project</h2>
        <p className={css.text}>{project.description}</p>
        <h2 className={css.title2}>Role</h2>
        <ul>
          {project.role.map(role => (
            <li className={css.projectItem}>
              <p className={css.text}>{role}</p>
            </li>
          ))}
        </ul>
        <h2 className={css.title2}>Technical Sheet</h2>
        <p className={css.text}>
          Code technologies I got involved with while working on this project.
        </p>
        <ul>
          {project.technologies.map(technologi => (
            <li className={css.projectItem}>
              <p className={css.text}>{technologi}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectDetails;
