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
        <img
          src={project.img}
          alt={project.title}
          className={css.projectImage}
        />
      </div>
    </div>
  );
};

export default ProjectDetails;
