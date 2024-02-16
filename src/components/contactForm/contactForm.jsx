import React from 'react';
import { Formik, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

import css from './contactForm.module.scss';

const schema = yup.object().shape({
  name: yup.string().min(3, 'Name is too short').required('Name is required'),
  email: yup
    .string()
    .email('Invalid email address')
    .required('Email is required'),
});

const ContactForm = () => {
  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      // Замініть URL на ваш API ендпоінт для відправки електронного листа
      const response = await fetch('YOUR_API_ENDPOINT', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) throw new Error('Something went wrong');

      // Обробіть успішну відправку
      console.log('Email sent successfully');
    } catch (error) {
      // Обробіть помилку відправки
      console.error('Failed to send email', error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        message: '',
      }}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      {formik => (
        <form onSubmit={formik.handleSubmit}>
          <div className={css.formContainer}>
            <Field
              id="name"
              name="name"
              type="text"
              onBlur={formik.handleBlur}
              autoComplete="off"
              placeholder="Name"
              className={`${css.input} ${
                formik.errors.name && formik.touched.name
                  ? css.errorInput
                  : formik.touched.name
                  ? css.сorrectInput
                  : ''
              }`}
            />
            <ErrorMessage name="name" component="div" className={css.error} />
            {formik.touched.name && !formik.errors.name && (
              <div className={css.successMessage}>This is an CORRECT name</div>
            )}
          </div>

          <div className={css.formContainer}>
            <Field
              id="email"
              name="email"
              type="text"
              onBlur={formik.handleBlur}
              placeholder="Email"
              autoComplete="off"
              className={`${css.input} ${
                formik.errors.email && formik.touched.email
                  ? css.errorInput
                  : formik.touched.email
                  ? css.сorrectInput
                  : ''
              }`}
            />
            <ErrorMessage name="email" component="div" className={css.error} />
            {formik.touched.email && !formik.errors.email && (
              <div className={css.successMessage}>This is an CORRECT email</div>
            )}
          </div>

          <div className={css.formContainer}>
            <textarea
              id="message"
              name="message"
              type="message"
              placeholder="Your message"
              autoComplete="off"
              className={css.input}
            />
          </div>
          <button className={css.pushable}>
            <span className={css.shadow}></span>
            <span className={css.edge}></span>
            <span className={css.front}>Send Message</span>
          </button>
        </form>
      )}
    </Formik>
  );
};

export default ContactForm;
