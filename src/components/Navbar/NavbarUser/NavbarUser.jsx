import { useSelector, useDispatch } from 'react-redux';

import { logOutOperation } from 'redux/auth/authOperations';

import { selectUser } from 'redux/selectors';

const NavbarUser = () => {
  const { name } = useSelector(selectUser);
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logOutOperation());
  };

  return (
    <div>
      <span>{name}</span>
      <button onClick={onLogout} type="button">
        Log out
      </button>
    </div>
  );
};

export default NavbarUser;
