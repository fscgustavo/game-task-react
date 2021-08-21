import { Box } from '@chakra-ui/react';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>GameTask</title>
        <meta name="description" content="Sua vida no próximo nível" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box bg="tomato" width="100%" height={56} />
    </>
  );
}
