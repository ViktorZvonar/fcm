import css from './Filter.module.css';

import { useSelector, useDispatch } from 'react-redux';

import { setFilter } from 'redux/filter/filterSlice';
import { getFilter } from 'redux/selectors';

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  const onSetFilter = ({ target }) => {
    dispatch(setFilter(target.value));
  };

  return (
    <label className={css.filter}>
      Find contacts by name
      <input
        className={css.find}
        onChange={onSetFilter}
        type="text"
        name="filter"
        filter={filter}
      />
    </label>
  );
};

export default Filter;
