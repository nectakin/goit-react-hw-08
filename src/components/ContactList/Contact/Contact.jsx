
import PropTypes from 'prop-types';
import { useState } from 'react';
import { FaPhoneAlt, FaUser } from 'react-icons/fa';

import DeleteContactModal from '../../DeleteContactModal';
import EditContactModal from '../../EditContactModal';

import styles from './Contact.module.css';

const Contact = ({ name, id, contactNumber }) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const handleDeleteContact = () => setIsDeleting(true);
  const handleRejectDeletion = () => setIsDeleting(false);

  const handleEditContact = () => setIsEditing(true);
  const handleCancelEditContact = () => setIsEditing(false);

  return (
    <li className={styles.contactItem}>
      {isDeleting && <DeleteContactModal id={id} onReject={handleRejectDeletion} />}
      {isEditing && (
        <EditContactModal
          id={id}
          name={name}
          contactNumber={contactNumber}
          onCancel={handleCancelEditContact}
        />
      )}
      {!isDeleting && !isEditing && (
        <>
          <div>
            <p className={styles.text}>
              <FaUser className={styles.icon} /> <span className={styles.textContent}>{name}</span>
            </p>
            <p className={styles.text}>
              <FaPhoneAlt className={styles.icon} />
              <span className={styles.textContent}>{contactNumber}</span>
            </p>
          </div>
          <div className={styles.buttonWrapper}>
            <button type="button" className={styles.button} onClick={handleDeleteContact}>
              Delete
            </button>
            <button type="button" className={styles.button} onClick={handleEditContact}>
              Edit
            </button>
          </div>
        </>
      )}
    </li>
  );
};
export default Contact;

Contact.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  contactNumber: PropTypes.string,
  handleDeleteContact: PropTypes.func,
};
