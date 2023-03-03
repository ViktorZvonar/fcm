import RegisterForm from 'components/RegisterForm/RegisterForm';

import { useDispatch } from 'react-redux';

import { signUpOperation } from 'redux/auth/authOperations';

const RegisterPage = () => {
  const dispatch = useDispatch();

  const onRegister = data => {
    dispatch(signUpOperation(data));
  };
  return (
    <div>
      <h2>Register Page</h2>
      <RegisterForm onSubmit={onRegister} />
    </div>
  );
};

export default RegisterPage;
