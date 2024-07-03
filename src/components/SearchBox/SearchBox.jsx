
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { selectContactFilter } from '../../redux/filters/selectors';
import { changeFilter } from '../../redux/filters/slice';

import styles from './SearchBox.module.css';

const SearchBox = () => {
  const filter = useSelector(selectContactFilter);
  const dispatch = useDispatch();

  const handleFilterChange = e => dispatch(changeFilter(e.target.value.toLowerCase()));

  return (
    <div className={styles.wrapper}>
      <p>Find contacts by name</p>
      <input type="text" className={styles.input} value={filter} onChange={handleFilterChange} />
    </div>
  );
};
export default SearchBox;

SearchBox.propTypes = {
  filter: PropTypes.string,
  onFilterChange: PropTypes.func,
};
