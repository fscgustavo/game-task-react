import { Grid, Skeleton } from '@chakra-ui/react';
import { useDeleteTaskMutation } from '../../services/task/taskList';
import { TaskResponse } from '../../services/task/taskList.types';
import Task from '../Task/Task';
import todo from '../../mocks/todo.json';

type TaskListProps = {
  tasks: TaskResponse | undefined;
  isLoading: boolean;
};

const skeletonCount = Array.from(Array(10).keys());

export default function TaskList({ tasks, isLoading }: TaskListProps) {
  const deleteMutation = useDeleteTaskMutation();

  const deleteTask = (event: React.ChangeEvent) => {
    const id = event.currentTarget.getAttribute('key');

    deleteMutation.mutate(Number(id));
  };

  if (isLoading) {
    return (
      <Grid
        templateColumns="1fr 1fr"
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
    <Grid templateColumns="1fr 1fr" gridGap={4}>
      {tasks?.map((task) => (
        <Task
          title={task.titulo}
          description={task.descricao}
          deadline={task.dataFim}
          difficulty={task.nivelDificuldade}
          onChange={deleteTask}
          isDisabled={deleteMutation.isLoading}
          key={task.id}
        />
      ))}
    </Grid>
  );
}
