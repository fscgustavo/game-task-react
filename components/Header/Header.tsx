import { Box, Flex, Avatar, Text } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/menu';

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
        <Link href="/" passHref>
          <a href="passHref" title="Página Inicial do Gametask">
            <Image
              src="/game-task-icon.svg"
              height="60"
              width="60"
              alt="logo da gametask"
            />
          </a>
        </Link>
        <Menu>
          <MenuButton>
            <Flex gridGap="8px" marginBottom="6px" alignItems="center" mb={1}>
              <Avatar
                src="./protoman-back.png"
                size="sm"
                alt="avatar do protoman"
              />
              <Text fontWeight="bold">Olá, Protoman</Text>
            </Flex>
          </MenuButton>
          <MenuList>
            <Link href="/" passHref>
              <MenuItem as="a">Tarefas</MenuItem>
            </Link>
            <Link href="/pomodoro" passHref>
              <MenuItem as="a">Pomodoro</MenuItem>
            </Link>
            <Link href="/feed" passHref>
              <MenuItem as="a">Feed</MenuItem>
            </Link>
          </MenuList>
        </Menu>
      </Flex>
    </Box>
  );
}
