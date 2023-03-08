import RegisterForm from 'components/RegisterForm/RegisterForm';

import { useSelector, useDispatch } from 'react-redux';

import { signUpOperation } from 'redux/auth/authOperations';

import { selectAuthError } from 'redux/selectors';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const { status, message } = useSelector(selectAuthError);
  const onRegister = data => {
    dispatch(signUpOperation(data));
  };

  return (
    <div>
      <h2>Register Page</h2>
      <RegisterForm onSubmit={onRegister} />
      {status && <p>{message}</p>}
    </div>
  );
};

export default RegisterPage;
