import { useSelector, useDispatch } from 'react-redux';

import { logOutOperation } from 'redux/auth/authOperations';

import { selectUser } from 'redux/selectors';

const NavbarUser = () => {
  const { email } = useSelector(selectUser);
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logOutOperation());
  };

  return (
    <div>
      <p>{email}</p>
      <button onClick={onLogout} type="button">
        Log out
      </button>
    </div>
  );
};

export default NavbarUser;
