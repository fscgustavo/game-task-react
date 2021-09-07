import { Box, Flex, Avatar, Text } from '@chakra-ui/react';
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
    >
      <Flex
        width="100%"
        maxWidth="944px"
        marginInline="auto"
        alignItems="end"
        justifyContent="space-between"
      >
        <Image src="/game-task-icon.svg" height="60" width="60" />
        <Flex gridGap="8px" alignItems="center" mb={1}>
          <Avatar src="./protoman-back.png" size="sm" />
          <Text fontWeight="bold">Olá, Protoman</Text>
        </Flex>
      </Flex>
    </Box>
  );
}
