import Head from 'next/head';
import { Box, IconButton } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';

export default function Home() {
  return (
    <>
      <Head>
        <title>GameTask</title>
        <meta name="description" content="Sua vida no próximo nível" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box as="header" bg="tomato" width="100%" height={56}></Box>
    </>
  );
}
