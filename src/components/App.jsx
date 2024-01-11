import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import About from '../pages/about/about';
import Portfolio from '../pages/portfolio/portfolio';
import ProjectDetails from '../pages/projectDetais/projectDetails';
import Contact from 'pages/contact/contact';
import MobileMenu from './mobileMenu/mobileMenu';
import NotFound from 'pages/notFound/notFound';

import css from './App.module.scss';

export const App = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
    console.log('Open');
  };

  return (
    <div>
      <div className={css.header}>
        <label className={css.container}>
          <input type="checkbox" onClick={toggleMenu} />
          <div className={css.checkmark}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </label>
      </div>

      {isMenuOpen && <MobileMenu />}

      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/:projectId" element={<ProjectDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
