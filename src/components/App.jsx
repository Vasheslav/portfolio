import React from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import css from './App.module.scss';
import About from '../pages/about/about';
import Projects from '../pages/projects/projects';
import ProjectDetails from '../pages/projectDetais/projectDetails';
import Contact from 'pages/contact/contact';
import NotFound from 'pages/notFound/notFound';
import ButtonMobileMenu from './buttonMobileMenu/buttonMobileMenu';
// const About = lazy(() => import('../pages/about/about'));
// const Projects = lazy(() => import('../pages/projects/projects'));
// const ProjectDetails = lazy(() =>
//   import('../pages/projectDetais/projectDetails')
// );
// const Contact = lazy(() => import('pages/contact/contact'));
// const NotFound = lazy(() => import('pages/notFound/notFound'));

export const App = () => {
  const location = useLocation();

  const isProjectDetailsPage = location.pathname.includes('/projects/');

  return (
    <div className={css.section}>
      <nav className={css.header}>
        {isProjectDetailsPage && (
          <Link
            to="/projects"
            className={`${css.nav_button} ${css.nav_button_left} ${css.custom_button_left}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              data-name="Layer 1"
              viewBox="0 0 24 24"
              height="38px"
              width="48px"
              fill="white"
            >
              <path d="M17.267 23.888 6.439 13.061C6.156 12.778 6 12.401 6 12s.156-.777.439-1.061L17.267.112l.707.707L7.146 11.646a.5.5 0 0 0 0 .708l10.827 10.827-.707.707Z" />
            </svg>
            <span className={`${css.button_text} ${css.button_text_left}`}>
              back to portfolio
            </span>
          </Link>
        )}
        <ButtonMobileMenu />
      </nav>
      <Routes className={css.content}>
        <Route path="/" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:projectId" element={<ProjectDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
