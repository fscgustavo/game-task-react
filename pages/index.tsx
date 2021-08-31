import Head from 'next/head';
import { Box } from '@chakra-ui/react';
import { Form } from '../src/components/Form/Form';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Head>
        <title>GameTask</title>
        <meta name="description" content="Sua vida no próximo nível" />
        <link rel="icon" href="/game-task-icon.svg" />
      </Head>
      <Box
        as="header"
        bg="primary"
        width="100%"
        height="80px"
        display="flex"
        alignItems="center"
        padding="8px 16px"
      >
        <Image src="/game-task-icon.svg" height="60" width="60" />
      </Box>
      <Box as="main" maxWidth="1024px" marginInline="auto">
        <Form />
      </Box>
    </>
  );
}
