
import { ErrorMessage, Field } from 'formik';

import styles from './FormLabel.module.css';

const FormLabel = ({ title }) => {
  const inputName = title === 'username' ? 'name' : title;
  const autoComplete = title === 'password' ? 'current-password' : 'on';
  return (
    <label className={styles.formLabel}>
      <span className={styles.labelTitle}>{title}</span>
      <Field
        autoComplete={autoComplete}
        name={inputName}
        type={title === 'password' ? title : 'text'}
        className={styles.formField}
      />
      <ErrorMessage name={inputName} component="span" className={styles.errorMessage} />
    </label>
  );
};
export default FormLabel;
