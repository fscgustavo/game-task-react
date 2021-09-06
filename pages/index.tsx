import Head from 'next/head';
import { Box, Grid } from '@chakra-ui/react';
import { Form } from '../components/Form/Form';
import Header from '../components/Header/Header';
import Stats from '../components/Stats/Stats';
import Task from '../components/Task/Task';

export default function Home() {
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
        <Grid templateColumns="1fr 1fr" gridGap={4}>
          <Task
            title="Lorem Ipsum"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et
            dictum tellus. Fusce venenatis enim eget pharetra condimentum.
            Nullam sed sagittis felis, quis tincidunt nisi. Ut fermentum erat
            sed tellus fringilla interdum. Maecenas sit amet dapibus augue.
            Donec vitae sollicitudin eros."
            deadline="12/09/2021"
          />
          <Task
            title="Lorem Ipsum"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et
            dictum tellus. Fusce venenatis enim eget pharetra condimentum.
            Nullam sed sagittis felis, quis tincidunt nisi. Ut fermentum erat
            sed tellus fringilla interdum. Maecenas sit amet dapibus augue.
            Donec vitae sollicitudin eros."
            deadline="12/09/2021"
          />
          <Task
            title="Lorem Ipsum"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et
            dictum tellus. Fusce venenatis enim eget pharetra condimentum.
            Nullam sed sagittis felis, quis tincidunt nisi. Ut fermentum erat
            sed tellus fringilla interdum. Maecenas sit amet dapibus augue.
            Donec vitae sollicitudin eros."
            deadline="12/09/2021"
          />
          <Task
            title="Lorem Ipsum"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et
            dictum tellus. Fusce venenatis enim eget pharetra condimentum.
            Nullam sed sagittis felis, quis tincidunt nisi. Ut fermentum erat
            sed tellus fringilla interdum. Maecenas sit amet dapibus augue.
            Donec vitae sollicitudin eros."
            deadline="12/09/2021"
          />
        </Grid>
      </Box>
    </>
  );
}
