
import { Form, Formik } from 'formik';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';

import { logIn } from '../../redux/auth/operations';

import FormLabel from '../FormLabel';

const INITIAL_VALUES = {
  email: '',
  password: '',
};

const VALIDATION_SCHEMA = Yup.object().shape({
  email: Yup.string().email('Enter valid email address').required('Required'),
  password: Yup.string().required('Required'),
});

const showErrorMessage = error =>
  toast.error(error === 400 ? 'Incorrect email or password' : 'Something went wrong');

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = values => {
    dispatch(logIn(values)).unwrap().catch(showErrorMessage);
  };
  return (
    <>
      <Formik
        onSubmit={handleSubmit}
        initialValues={INITIAL_VALUES}
        validationSchema={VALIDATION_SCHEMA}
      >
        <Form>
          <FormLabel title="email" />
          <FormLabel title="password" />
          <button type="submit">Log in</button>
        </Form>
      </Formik>
    </>
  );
};
export default LoginForm;
