import { useSelector } from 'react-redux';

import { Navigate, Outlet } from 'react-router-dom';

import { selectIsAuth } from 'redux/selectors';

const PublicRoute = () => {
  const isLogin = useSelector(selectIsAuth);

  if (isLogin) {
    return <Navigate to="/contacts" />;
  }
  return <Outlet />;
};

export default PublicRoute;
