import axios from 'axios';

const authInstance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

export const signUp = async data => {
  const { data: result } = await authInstance.post('/users/signup', data);
  console.log(data);
  return result;
};

export const logIn = async data => {
  const { data: result } = await authInstance.post('/users/login', data);
  console.log(data);
  return result;
};
