import Head from 'next/head';
import { Box } from '@chakra-ui/react';
import { Form } from '../components/Form/Form';
import Header from '../components/Header/Header';
import Stats from '../components/Stats/Stats';

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
      >
        <Stats />
        <Form />
      </Box>
    </>
  );
}
