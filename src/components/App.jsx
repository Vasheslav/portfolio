import React from 'react';
import { Routes, Route } from 'react-router-dom';

import About from '../pages/about/about';
import Projects from '../pages/projects/projects';
import ProjectDetails from '../pages/projectDetais/projectDetails';
import Contact from 'pages/contact/contact';
// import NotFound from 'pages/notFound/notFound';
// import ButtonMobileMenu from './buttonMobileMenu/buttonMobileMenu';

import css from './App.module.scss';

export const App = () => {
  return (
    <div className={css.section}>
      {/* <nav className={css.header}>
        <ButtonMobileMenu />
      </nav> */}
      <Routes className={css.content}>
        <Route path="/" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:projectId" element={<ProjectDetails />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </div>
  );
};
