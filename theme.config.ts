import { extendTheme } from '@chakra-ui/react';

const theme = {
  config: {
    initialColorMode: 'dark' as const,
    useSystemColorMode: false,
  },
  colors: {
    primary: '#F0524A',
  },
};

export default extendTheme(theme);
