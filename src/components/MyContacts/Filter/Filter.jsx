import { StyledTextField } from 'components/RegisterForm/RegisterForm.styled';

import { useSelector, useDispatch } from 'react-redux';

import { setFilter } from 'redux/filter/filterSlice';
import { selectFilter } from 'redux/selectors';
import { Box } from '@mui/system';

const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  const onSetFilter = ({ target }) => {
    dispatch(setFilter(target.value));
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'white',
        padding: '15px',
        boxShadow: '0px 0px 20px 5px #1976d2',
        borderRadius: '5px',
        width: '100%',
        marginBottom: '40px',
      }}
    >
      <StyledTextField
        style={{
          marginBottom: '0px',
        }}
        name="filter"
        type="text"
        label="Find a specified contact"
        filter={filter}
        onChange={onSetFilter}
        helperText="Start typing a name or a number"
      />
    </Box>
  );
};

export default Filter;
