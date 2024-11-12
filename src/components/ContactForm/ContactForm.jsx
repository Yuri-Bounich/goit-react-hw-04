import PropTypes from 'prop-types';
import s from './ContactForm.module.css';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

const ContactForm = ({ handleAddTodo }) => {
  const orderSchema = Yup.object().shape({
    login: Yup.string().min(3).max(50).required('this field is required'),
    password: Yup.string().min(3).max(50).required('this field is required'),
  });

  const onSubmit = (values, options) => {
    // console.log(values);
    handleAddTodo(values); // Передаємо значення форми у `handleAddTodo`
    options.resetForm();
  };

  return (
    <div>
      <h2 className={s.title}>Phonebook</h2>
      <div className={s.container}>
        <Formik
          initialValues={{ login: '', password: '' }}
          validationSchema={orderSchema}
          onSubmit={onSubmit}
        >
          <Form className={s.form}>
            <label className={s.input}>
              <span>Name</span>
              <Field type="text" name="login" />
              <ErrorMessage name="login" component="span" />
            </label>
            <label className={s.input}>
              <span>Number</span>
              <Field type="text" name="password" />
              <ErrorMessage name="password" component="span" />
            </label>
            <button type="submit">Add contact</button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

ContactForm.propTypes = {
  handleAddTodo: PropTypes.func.isRequired,
};

export default ContactForm;
