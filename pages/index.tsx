import { Box } from '@chakra-ui/react';
import { Form } from '../components/Form/Form';
import Header from '../components/Header/Header';
import Stats from '../components/Stats/Stats';
import { useTask } from '../services/task/taskList';
import TaskList from '../components/TaskList/TaskList';
import { GetServerSideProps } from 'next';

export default function Home() {
  const response = useTask();

  return (
    <>
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

export const getServerSideProps: GetServerSideProps = async (context) => {
  // if (!req.session.user) {
  //   return {
  //     redirect: {
  //       destination: '/login',
  //       permanent: false,
  //     },
  //   };
  // }

  console.log({ context });

  return {
    props: {},
  };
};
