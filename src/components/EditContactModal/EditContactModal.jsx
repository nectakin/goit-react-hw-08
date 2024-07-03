
import { Field, Form, Formik } from 'formik';
import { FaPhoneAlt, FaUser } from 'react-icons/fa';
import * as Yup from 'yup';

import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { updateContact } from '../../redux/contacts/operations';
import styles from './EditContactModal.module.css';

const VALIDATION_SCHEMA = Yup.object().shape({
  name: Yup.string().required('Required').min(2, 'Too short').max(50, 'Too long'),
  number: Yup.string().required('Required').min(3, 'Too short').max(50, 'Too long'),
});

const showSuccessMessage = () => toast.success('Saved');
const showErrorMessage = () => toast.error('Something went wrong');

const EditContactModal = ({ name, id, contactNumber, onCancel }) => {
  const INITIAL_VALUES = { name, number: contactNumber };

  const dispatch = useDispatch();

  const hasValuesChanged = values =>
    Object.entries(values).every(([key, value]) => INITIAL_VALUES[key] === value);

  const handleSubmit = values => {
    if (hasValuesChanged(values)) return;

    dispatch(updateContact({ ...values, id }))
      .unwrap()
      .then(showSuccessMessage)
      .catch(showErrorMessage);
    onCancel();
  };

  return (
    <Formik
      onSubmit={handleSubmit}
      initialValues={INITIAL_VALUES}
      validationSchema={VALIDATION_SCHEMA}
    >
      <Form className={styles.form}>
        <div>
          <label className={styles.label}>
            <FaUser className={styles.icon} />
            <Field className={styles.input} name="name" type="text" />
          </label>
          <label className={styles.label}>
            <FaPhoneAlt className={styles.icon} />
            <Field className={styles.input} name="number" type="text" />
          </label>
        </div>
        <div className={styles.buttonWrapper}>
          <button type="submit" className={styles.button}>
            Save
          </button>
          <button type="button" className={styles.button} onClick={onCancel}>
            Cancel
          </button>
        </div>
      </Form>
    </Formik>
  );
};
export default EditContactModal;
