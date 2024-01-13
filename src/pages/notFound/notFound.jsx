import React from 'react';
import css from './notFound.module.scss';

const NotFound = () => {
  return (
    <div className={css.container}>
      <h1 className={css.title}>Not Found</h1>
      <p className={css.text}>
        Looks like you've followed a broken link or entered a URL that doesn't
        exist on this site.
      </p>
    </div>
  );
};

export default NotFound;
