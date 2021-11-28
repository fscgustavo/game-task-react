import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import Cookies from 'js-cookie';
import {
  useMutation,
  UseMutationOptions,
  useQuery,
  useQueryClient,
} from 'react-query';
import { TaskPropertiesAPI, TaskResponse } from './taskList.types';

const taskURI = 'https://localhost:44373/api/tarefa';

export const getTasks = async () => {
  const response = await axios.get<TaskResponse>(taskURI, {
    Authorization: 'Bearer ' + Cookies.get('token'),
  } as AxiosRequestConfig);

  return response.data;
};

export const useTask = () => {
  return useQuery<TaskResponse, AxiosError>('task', getTasks);
};

export const postTask = async (task: Omit<TaskPropertiesAPI, 'id'>) => {
  const response = await axios.post(taskURI, task, {
    Authorization: 'Bearer ' + Cookies.get('token'),
  } as AxiosRequestConfig);

  return response.data;
};

export const useTaskMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(postTask, {
    onSuccess: () => {
      queryClient.invalidateQueries('task');
    },
  });
};

export const deleteTask = async (id: TaskPropertiesAPI['id']) => {
  const response = await axios.delete(`${taskURI}/${id}`, {
    Authorization: 'Bearer ' + Cookies.get('token'),
  } as AxiosRequestConfig);

  return response.data;
};

export const useDeleteTaskMutation = (
  options?: UseMutationOptions<void, AxiosError, number>,
) => {
  return useMutation<void, AxiosError, number>(deleteTask, options);
};
