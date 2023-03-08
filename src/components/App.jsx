import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Navbar from './Navbar/Navbar';
import UserRoutes from './UserRoutes';

import { currentOperation } from 'redux/auth/authOperations';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(currentOperation());
  }, [dispatch]);
  return (
    <div>
      <Navbar />
      <UserRoutes />
    </div>
  );
};

export default App;
