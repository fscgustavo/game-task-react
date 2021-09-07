import { Grid, Skeleton } from '@chakra-ui/react';
import { TaskResponse } from '../../services/taskList/taskLIst.types';
import Task from '../Task/Task';

type TaskListProps = {
  tasks: TaskResponse | undefined;
  isLoading: boolean;
};

const skeletonCount = [...Array(10)];

export default function TaskList({ tasks, isLoading }: TaskListProps) {
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
          key={task.id}
        />
      ))}
    </Grid>
  );
}
