import axios from 'axios';
import { useMutation } from 'react-query';
import { LoginProperties } from './login.types';
import Cookies from 'js-cookie';
import { useRouter } from 'next/dist/client/router';

const loginURI = 'https://localhost:44373/token';

export const postLogin = async (task: LoginProperties) => {
  const response = await axios.post(loginURI, task, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });

  return response.data;
};

export const useLoginMutation = () => {
  const router = useRouter();

  return useMutation(postLogin, {
    onSuccess: (response) => {
      Cookies.set('token', response.access_token);
      router.push('/');
    },
  });
};
