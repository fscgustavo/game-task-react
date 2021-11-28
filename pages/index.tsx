import { Box } from '@chakra-ui/react';
import { Form } from '../components/Form/Form';
import Header from '../components/Header/Header';
import Stats from '../components/Stats/Stats';
import { useTask } from '../services/task/taskList';
import TaskList from '../components/TaskList/TaskList';
import { GetServerSideProps } from 'next';
import { parseCookies } from 'nookies';

type HomeProps = {
  username: string;
};

export default function Home({ username }: HomeProps) {
  const response = useTask();

  return (
    <>
      <Header username={username} />
      <Box
        as="main"
        maxWidth="1024px"
        marginInline="auto"
        display="grid"
        gridGap={4}
        padding="24px 16px"
      >
        <Stats username={username} />
        <Form />
        <TaskList tasks={response.data} isLoading={response.isLoading} />
      </Box>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { token, username } = parseCookies(context);

  if (!token) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  return {
    props: { username },
  };
};
