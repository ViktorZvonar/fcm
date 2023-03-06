import RegisterForm from 'components/RegisterForm/RegisterForm';
import { Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { signUpOperation } from 'redux/auth/authOperations';

import { getAuthError, isAuth } from 'redux/auth/authSelectors';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const { status, message } = useSelector(getAuthError);
  const isLogin = useSelector(isAuth);
  console.log(isLogin);
  //   console.log(status, message);

  const onRegister = data => {
    dispatch(signUpOperation(data));
  };

  if (isLogin) {
    return <Navigate to="/contacts" />;
  }
  return (
    <div>
      <h2>Register Page</h2>
      <RegisterForm onSubmit={onRegister} />
      {status && <p>{message}</p>}
    </div>
  );
};

export default RegisterPage;
