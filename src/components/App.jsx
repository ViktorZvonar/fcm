import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Navbar from './Navbar/Navbar';
import UserRoutes from './UserRoutes';

import { currentOperation } from 'redux/auth/authOperations';

import { Box } from '@mui/material';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(currentOperation());
  }, [dispatch]);
  return (
    <Box>
      <Navbar />
      <UserRoutes />
    </Box>
  );
};

export default App;
