import Head from 'next/head';
import { Box } from '@chakra-ui/react';
import { Form } from '../src/components/Form/Form';

export default function Home() {
  return (
    <>
      <Head>
        <title>GameTask</title>
        <meta name="description" content="Sua vida no próximo nível" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box as="header" bg="primary" width="100%" height={56}></Box>
      <Box as="main" maxWidth="1024px" marginInline="auto">
        <Form />
      </Box>
    </>
  );
}
