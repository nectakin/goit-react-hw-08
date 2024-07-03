
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';

import toast, { Toaster } from 'react-hot-toast';
import styles from './DeleteContactModal.module.css';

const showDeletedNotification = () => toast.success('Deleted');
const showErrorNotification = () => toast.success('Something went wrong :(');

const DeleteContactModal = ({ id, onReject }) => {
  const dispatch = useDispatch();

  const handleConfirmDelete = () =>
    dispatch(deleteContact(id)).unwrap().then(showDeletedNotification).catch(showErrorNotification);

  return (
    <div>
      <b className={styles.message}>Are you sure you want to delete this contact?</b>
      <div className={styles.options}>
        <button type="button" onClick={handleConfirmDelete}>
          Yes
        </button>
        <button type="button" onClick={onReject}>
          No
        </button>
      </div>
      <Toaster />
    </div>
  );
};
export default DeleteContactModal;
