
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ContactForm from '../components/ContactForm';
import ContactList from '../components/ContactList';
import ErrorMessage from '../components/ErrorMessage';
import Loader from '../components/Loader';
import SearchBox from '../components/SearchBox';

import { fetchContacts } from '../redux/contacts/operations';
import { selectError, selectLoading } from '../redux/contacts/selectors';

const PhoneBookPage = () => {
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {error && <ErrorMessage>{error.message}</ErrorMessage>}
      {isLoading && !error ? <Loader /> : <ContactList />}
    </>
  );
};
export default PhoneBookPage;
