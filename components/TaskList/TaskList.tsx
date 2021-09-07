import { Grid, Skeleton, useToast } from '@chakra-ui/react';
import { ErrorBoundary } from 'react-error-boundary';
import { useQueryClient } from 'react-query';
import { useDeleteTaskMutation } from '../../services/task/taskList';
import { TaskResponse } from '../../services/task/taskList.types';
import ErrorFallback from '../ErrorFallback/ErrorFallback';
import Task from '../Task/Task';

type TaskListProps = {
  tasks: TaskResponse | undefined;
  isLoading: boolean;
};

const skeletonCount = Array.from(Array(10).keys());

export default function TaskList({ tasks, isLoading }: TaskListProps) {
  const query = useQueryClient();
  const toast = useToast();

  const deleteMutation = useDeleteTaskMutation({
    onSuccess: () => {
      toast({
        title: 'Tarefa concluída',
        status: 'success',
        isClosable: true,
      });
      query.invalidateQueries('task');
    },
  });

  if (isLoading) {
    return (
      <Grid
        templateColumns={{ md: '1fr 1fr' }}
        gridGap={4}
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Carregando as suas tarefas"
        aria-busy="true"
        tabIndex={0}
      >
        {skeletonCount.map((index) => (
          <Skeleton height="120px" width="100%" key={index} />
        ))}
      </Grid>
    );
  }

  return (
    <ErrorBoundary fallback={<ErrorFallback />}>
      <Grid templateColumns={{ md: '1fr 1fr' }} gridGap={4}>
        {tasks?.map((task) => (
          <Task
            title={task.titulo}
            description={task.descricao}
            deadline={task.dataFim}
            difficulty={task.nivelDificuldade}
            onChange={() => deleteMutation.mutate(task.id)}
            isDisabled={deleteMutation.isLoading}
            key={task.id}
          />
        ))}
      </Grid>
    </ErrorBoundary>
  );
}
