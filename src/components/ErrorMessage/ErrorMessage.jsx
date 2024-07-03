
import PropTypes from 'prop-types';

import styles from './ErrorMessage.module.css';

const ErrorMessage = ({ children }) => {
  return <p className={styles.message}>{children}</p>;
};
export default ErrorMessage;

ErrorMessage.propTypes = {
  children: PropTypes.node,
};
