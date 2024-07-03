
import { Form, Formik } from 'formik';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';

import { register } from '../../redux/auth/operations';

import FormLabel from '../FormLabel';

const INITIAL_VALUES = {
  name: '',
  email: '',
  password: '',
};

const VALIDATION_SCHEMA = Yup.object().shape({
  name: Yup.string().required('Required').min(2, 'Name must be longer'),
  email: Yup.string().email('Enter valid email address').required('Required'),
  password: Yup.string().required('Required').min(7, 'Password must be longer'),
});

const showError = error =>
  toast.error(error === 400 ? 'This email is taken' : 'Something went wrong(');

const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = values => {
    dispatch(register(values)).unwrap().catch(showError);
  };

  return (
    <>
      <Formik
        onSubmit={handleSubmit}
        initialValues={INITIAL_VALUES}
        validationSchema={VALIDATION_SCHEMA}
      >
        <Form>
          <FormLabel title="username" />
          <FormLabel title="email" />
          <FormLabel title="password" />
          <button type="submit">Register</button>
        </Form>
      </Formik>
    </>
  );
};
export default RegisterForm;
