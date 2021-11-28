import axios from 'axios';
import { useMutation } from 'react-query';
import { LoginProperties } from './login.types';

const loginURI = 'https://localhost:44373/token';

export const postLogin = async (task: LoginProperties) => {
  const response = await axios.post(loginURI, task);

  return response.data;
};

export const useLoginMutation = () => {
  return useMutation(postLogin);
};
