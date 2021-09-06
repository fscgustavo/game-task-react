import { Box } from '@chakra-ui/layout';
import Image from 'next/image';

export default function Header() {
  return (
    <Box
      as="header"
      bg="primary"
      width="100%"
      height="80px"
      display="flex"
      alignItems="center"
      padding="8px 16px"
      mb={8}
    >
      <Image src="/game-task-icon.svg" height="60" width="60" />
    </Box>
  );
}
