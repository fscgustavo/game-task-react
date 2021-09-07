import axios, { AxiosError } from 'axios';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { TaskPropertiesAPI, TaskResponse } from './taskList.types';

const taskURI = 'https://localhost:44344/api/tarefa';

export const getTasks = async () => {
  const response = await axios.get<TaskResponse>(taskURI);

  return response.data;
};

export const useTask = () => {
  return useQuery<TaskResponse, AxiosError>('tasks', getTasks);
};

export const postTask = async (task: TaskPropertiesAPI) => {
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
