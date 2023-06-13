import { StyledTextField } from 'components/RegisterForm/RegisterForm.styled';

import { useSelector, useDispatch } from 'react-redux';

import { setFilter } from 'redux/filter/filterSlice';
import { selectFilter } from 'redux/selectors';

const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  const onSetFilter = ({ target }) => {
    dispatch(setFilter(target.value));
  };

  return (
    <StyledTextField
      name="filter"
      type="text"
      label="Find a specified contact"
      filter={filter}
      onChange={onSetFilter}
      helperText="Start typing a name or a number"
    />
  );
};

export default Filter;
