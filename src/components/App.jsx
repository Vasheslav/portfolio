import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import css from './App.module.scss';
import About from '../pages/about/about';
import Projects from '../pages/projects/projects';
import ProjectDetails from '../pages/projectDetais/projectDetails';
import Contact from 'pages/contact/contact';
import NotFound from 'pages/notFound/notFound';
import BurgerMenu from './burgerMenu/burgerMenu';

// const About = lazy(() => import('../pages/about/about'));
// const Projects = lazy(() => import('../pages/projects/projects'));
// const ProjectDetails = lazy(() =>
//   import('../pages/projectDetais/projectDetails')
// );
// const Contact = lazy(() => import('pages/contact/contact'));
// const NotFound = lazy(() => import('pages/notFound/notFound'));

export const App = () => {
  return (
    <div className={css.section}>
      <nav className={css.header}>
        <BurgerMenu />
        <div className={css.headerMenu_container}>
          <ul className={css.list}>
            <li className={css.link}>
              <Link to="/" className={css.text}>
                about
              </Link>
            </li>
            <li className={css.link}>
              <Link to="/projects" className={css.text}>
                portfolio
              </Link>
            </li>
            <li className={css.link}>
              <Link to="/contact" className={css.text}>
                contact
              </Link>
            </li>
          </ul>
        </div>
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
