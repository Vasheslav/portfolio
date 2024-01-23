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
  //   const dispatch = useDispatch();
  //   const [showPassword, setShowPassword] = useState(false);

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
      }}
      validationSchema={schema}
      //   onSubmit={values => {
      //     dispatch(register(values))
      //       .unwrap()
      //       .catch(error => {
      //         if (error.message === 'Email in use') {
      //           toast.error('Email in use');
      //         } else {
      //           toast.error('Some error happened :(');
      //         }
      //       });
      //   }}
    >
      {formik => (
        <form onSubmit={formik.handleSubmit}>
          <div className={css.passwordContainer}>
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
            {/* {formik.errors.name && formik.touched.name && (
              <img src={errorImg} alt="Error" className={css.errorImage} />
            )}
            {formik.touched.name && !formik.errors.name && (
              <img src={doneImg} alt="Done" className={css.doneImage} />
            )} */}
            <ErrorMessage name="name" component="div" className={css.error} />
            {formik.touched.name && !formik.errors.name && (
              <div className={css.successMessage}>This is an CORRECT name</div>
            )}
          </div>
          <div className={css.passwordContainer}>
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
            {/* {formik.errors.email && formik.touched.email && (
              <img src={errorImg} alt="Error" className={css.errorImage} />
            )}
            {formik.touched.email && !formik.errors.email && (
              <img src={doneImg} alt="Done" className={css.doneImage} />
            )} */}
            <ErrorMessage name="email" component="div" className={css.error} />
            {formik.touched.email && !formik.errors.email && (
              <div className={css.successMessage}>This is an CORRECT email</div>
            )}
          </div>
          <div className={css.passwordContainer}>
            {/* <Field
              id="password"
              name="password"
              //   type={showPassword ? 'text' : 'password'}
              onBlur={formik.handleBlur}
              placeholder="Password"
              autoComplete="off"
              className={`${css.input} ${css['last_input']} ${
                formik.errors.password && formik.touched.password
                  ? css.errorInput
                  : formik.touched.password
                  ? css.сorrectInput
                  : ''
              }`}
            /> */}
            <div
              //   onClick={() => setShowPassword(!showPassword)}
              className={css.passwordToggle}
            >
              {/* <img
                src={showPassword ? hidePasswordIcon : showPasswordIcon}
                alt="Show Password"
                className={css.passwordIcon}
              /> */}
            </div>
            {/* <ErrorMessage
              name="password"
              component="div"
              className={css.error}
            />
            {formik.touched.password && !formik.errors.password && (
              <div className={css.successMessage}>
                This is an CORRECT password
              </div>
            )} */}
          </div>
          <button type="submit" className={css.button}>
            Send Message
          </button>
        </form>
      )}
    </Formik>
  );
};

export default ContactForm;
