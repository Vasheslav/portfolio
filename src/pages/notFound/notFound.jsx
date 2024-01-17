import React from 'react';
import css from './notFound.module.scss';

const NotFound = () => {
  return (
    <div className={css.container}>
      <div className={css.flex_box}>
        <h1 className={css.title}>Not Found</h1>
        <p className={css.text}>
          Looks like you've followed a broken link or entered a URL that doesn't
          exist on this site.
        </p>
        <a href="/">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="Isolation_Mode"
              data-name="Isolation Mode"
              viewBox="0 0 24 24"
              width="12"
              height="12"
            >
              <path d="M16.041,24,6.534,14.48a3.507,3.507,0,0,1,0-4.948L16.052,0,18.17,2.121,8.652,11.652a.5.5,0,0,0,0,.707l9.506,9.52Z" />
            </svg>
          </span>
          Back to our site
        </a>
      </div>
    </div>
  );
};

export default NotFound;
