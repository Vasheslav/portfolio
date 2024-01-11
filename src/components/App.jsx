import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import About from '../pages/about/about';
import Projects from '../pages/projects/projects';
import ProjectDetails from '../pages/projectDetais/projectDetails';
import Contact from 'pages/contact/contact';
import NotFound from 'pages/notFound/notFound';

// import css from './App.module.scss';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:projectId" element={<ProjectDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
