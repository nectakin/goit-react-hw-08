
import { useSelector } from 'react-redux';

import Contact from './Contact';

import { selectFilteredContacts } from '../../redux/contacts/selectors';

import styles from './ContactList.module.css';

const ContactList = () => {
  const items = useSelector(selectFilteredContacts);

  return (
    <ul className={styles.contactList}>
      {items.map(({ id, name, number }) => (
        <Contact key={id} name={name} contactNumber={number} id={id} />
      ))}
    </ul>
  );
};
export default ContactList;
