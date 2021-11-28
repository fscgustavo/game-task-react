import { Avatar } from '@chakra-ui/avatar';
import { Button } from '@chakra-ui/button';
import { Box } from '@chakra-ui/layout';
import Header from '../../components/Header/Header';
import Post from '../../components/Post/Post';
import PostList from '../../components/PostList';
import { useFeed } from '../../services/feed/feed';

export default function Feed() {
  return (
    <>
      <Header />
      <Box
        as="main"
        maxWidth="690px"
        marginInline="auto"
        display="grid"
        gridGap={4}
        padding="24px 16px"
        placeItems="center"
      >
        <Box
          display="flex"
          gridGap="8px"
          bg="whiteAlpha.200"
          borderRadius="8px"
          width="100%"
          padding="12px 16px"
        >
          <Avatar
            src="./protoman-back.png"
            size="sm"
            alt="avatar do protoman"
          />
          <Button
            width="100%"
            borderRadius="20px"
            justifyContent="flex-start"
            color="#B0B3B8"
          >
            No que você está pensando?
          </Button>
        </Box>
        <Post
          name="Protoman"
          avatar="./protoman-back.png"
          date="3h ago"
          image="https://www.centralxbox.com.br/wp-content/uploads/2020/07/controle-xcloud3.png"
          text="A partir de 30 de setembro de 2021, você poderá jogar mais de 100 jogos do Xbox em seus celulares e tablets Apple (onde disponível), PCs com Windows 10 e telefones e tablets Android (onde disponível) com o Xbox Game Pass Ultimate."
        />
        <PostList />
      </Box>
    </>
  );
}
