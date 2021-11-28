import axios from 'axios';
import { useMutation } from 'react-query';
import { LoginProperties } from './login.types';
import Cookies from 'js-cookie';
import { useRouter } from 'next/dist/client/router';

const loginURI = 'https://localhost:44373/token';

export const postLogin = async (properties: LoginProperties) => {
  const queryString = `UserName=${properties.UserName}&Password=${properties.Password}&grant_type=${properties.grant_type}`;

  const response = await axios.post(loginURI, queryString, {
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
