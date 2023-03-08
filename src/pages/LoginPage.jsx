import LoginForm from './../components/LoginForm/LoginForm';

import { useSelector, useDispatch } from 'react-redux';

import { logInOperation } from 'redux/auth/authOperations';

import { selectAuthError } from 'redux/selectors';

const LoginPage = () => {
  const dispatch = useDispatch();
  const { status, message } = useSelector(selectAuthError);

  const onLogin = data => {
    dispatch(logInOperation(data));
  };

  return (
    <div>
      <h2>Log in</h2>
      <LoginForm onSubmit={onLogin} />
      {status && <p>{message}</p>}
    </div>
  );
};

export default LoginPage;
