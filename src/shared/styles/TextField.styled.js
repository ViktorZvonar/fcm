import { TextField } from '@mui/material';
import styled from '@emotion/styled';

export const StyledTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: 'white',
    backgroundColor: 'orange',
    border: '1px solid blue',
  },
  '& label': {
    backgroundColor: 'white',
    padding: '0 5px ',
    borderRadius: '5px',
  },

  marginBottom: '40px',
});
