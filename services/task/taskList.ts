import axios, { AxiosError } from 'axios';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { TaskPropertiesAPI, TaskResponse } from './taskList.types';

const taskURI = 'https://localhost:44344/api/tarefa';

export const getTasks = async () => {
  const response = await axios.get<TaskResponse>(taskURI);

  return response.data;
};

export const useTask = () => {
  return useQuery<TaskResponse, AxiosError>('task', getTasks);
};

export const postTask = async (task: Omit<TaskPropertiesAPI, 'id'>) => {
  const response = await axios.post(taskURI, task);

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
  const response = await axios.delete(`${taskURI}/${id}`);

  return response.data;
};

export const useDeleteTaskMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(deleteTask, {
    onSuccess: () => {
      queryClient.invalidateQueries('task');
    },
  });
};
