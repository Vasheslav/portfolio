import React from 'react';
import { useParams } from 'react-router-dom';
import ProjectsData from '../../components/projectsData';

import css from './projectDetails.module.scss';

const ProjectDetails = () => {
  const { projectId } = useParams();

  const project = ProjectsData.find(p => p.id.toString() === projectId);

  return (
    <div className={css.conteiner}>
      <div className={css.projectCard}>
        <h1>{project.title}</h1>

        {project.anotherImg.map(img => (
          <img src={img} alt={project.title} className={css.projectImage} />
        ))}
        <h2>About this project</h2>
        <p>{project.description}</p>
        <h2>Role</h2>
        <ul>
          {project.role.map(role => (
            <li className={css.projectItem}>
              <p>{role}</p>
            </li>
          ))}
        </ul>
        <h2>Technical Sheet</h2>
        <p>
          Code technologies I got involved with while working on this project.
        </p>
        <ul>
          {project.technologies.map(technologi => (
            <li className={css.projectItem}>
              <p>{technologi}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectDetails;
