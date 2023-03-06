import LoginForm from './../components/LoginForm/LoginForm';

import { useSelector, useDispatch } from 'react-redux';

import { logInOperation } from 'redux/auth/authOperations';

import { getAuthError, isAuth } from 'redux/auth/authSelectors';

import { Navigate } from 'react-router-dom';

const LoginPage = () => {
  const dispatch = useDispatch();
  const { status, message } = useSelector(getAuthError);
  const isLogin = useSelector(isAuth);

  const onLogin = data => {
    dispatch(logInOperation(data));
  };

  if (isLogin) {
    return <Navigate to="/contacts" />;
  }

  return (
    <div>
      <h2>Log in</h2>
      <LoginForm onSubmit={onLogin} />
      {status && <p>{message}</p>}
    </div>
  );
};

export default LoginPage;
