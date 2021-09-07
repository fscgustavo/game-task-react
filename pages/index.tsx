import Head from 'next/head';
import { Box } from '@chakra-ui/react';
import { Form } from '../components/Form/Form';
import Header from '../components/Header/Header';
import Stats from '../components/Stats/Stats';
import { useTask } from '../services/task/taskList';
import TaskList from '../components/TaskList/TaskList';

export default function Home() {
  const response = useTask();

  return (
    <>
      <Head>
        <title>GameTask</title>
        <meta name="description" content="Sua vida no próximo nível" />
        <link rel="icon" href="/game-task-icon.svg" />
      </Head>
      <Header />
      <Box
        as="main"
        maxWidth="1024px"
        marginInline="auto"
        display="grid"
        gridGap={4}
        padding="24px 16px"
      >
        <Stats />
        <Form />
        <TaskList tasks={response.data} isLoading={response.isLoading} />
      </Box>
    </>
  );
}
