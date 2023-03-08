import axios from 'axios';

const authInstance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

const setToken = token => {
  if (token) {
    return (authInstance.defaults.headers.common.authorization = `Bearer ${token}`);
  }
  authInstance.defaults.headers.common.authorization = '';
};

export const signUp = async data => {
  const { data: result } = await authInstance.post('/users/signup', data);
  return result;
};

export const logIn = async data => {
  const { data: result } = await authInstance.post('/users/login', data);
  setToken(result.token);
  return result;
};

export const logOut = async () => {
  const { data } = await authInstance.post('/users/logout');
  setToken();
  return data;
};

export const getCurrent = async token => {
  try {
    setToken(token);
    const { data } = await authInstance.get('/users/current');
    return data;
  } catch (error) {
    setToken();
    throw error;
  }
};

export default authInstance;
