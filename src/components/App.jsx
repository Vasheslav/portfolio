import { Routes, Route } from 'react-router-dom';

// import menu from '../img/menu.png';
import About from '../pages/about/about';
import Portfolio from '../pages/portfolio/portfolio';
import ProjectDetails from '../pages/projectDetais/projectDetails';
import Contact from 'pages/contact/contact';
import NotFound from 'pages/notFound/notFound';

import css from './App.module.scss';

export const App = () => {
  return (
    <div>
      <div className={css.header}>
        <label className={css.container}>
          <input type="checkbox" />
          <div className={css.checkmark}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </label>
      </div>
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
