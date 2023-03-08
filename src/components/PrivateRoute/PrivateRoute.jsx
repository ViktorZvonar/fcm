import { useSelector } from 'react-redux';

import { Navigate, Outlet } from 'react-router-dom';

import { selectIsAuth } from 'redux/selectors';

const PrivateRoute = () => {
  const isLogin = useSelector(selectIsAuth);

  if (!isLogin) {
    return <Navigate to="/login" />;
  }
  return <Outlet />;
};

export default PrivateRoute;
