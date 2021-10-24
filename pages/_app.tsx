import { useRef } from 'react';
import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Hydrate } from 'react-query/hydration';
import Head from 'next/head';
import '../styles/App.css';
import '../styles/slider.css';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '../theme.config';

function MyApp({ Component, pageProps }: AppProps) {
  const queryClientRef = useRef<QueryClient>();
  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient();
  }

  return (
    <>
      <Head>
        <title>GameTask</title>
        <meta name="description" content="Sua vida no próximo nível" />
        <link rel="icon" href="/game-task-icon.svg" />
      </Head>
      <ChakraProvider theme={theme}>
        <QueryClientProvider client={queryClientRef.current}>
          <Hydrate state={pageProps.dehydratedState}>
            <Component {...pageProps} />
          </Hydrate>
        </QueryClientProvider>
      </ChakraProvider>
    </>
  );
}
export default MyApp;
