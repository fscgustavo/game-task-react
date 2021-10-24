import { Avatar } from '@chakra-ui/avatar';
import { Box, Flex, Text } from '@chakra-ui/layout';

type PostProps = {
  name: string;
  date: string;
  avatar: string;
  text: string;
  image: string;
};

export default function Post({ name, date, avatar, text, image }: PostProps) {
  return (
    <Box bg="whiteAlpha.200" borderRadius="8px" width="100%" paddingTop="12px">
      <Box paddingInline="16px">
        <Flex gridGap="8px">
          <Avatar src={avatar} size="sm" alt={`avatar do ${name}`} />
          <Box>
            <Text color="#e4e6eb" fontWeight="600">
              {name}
            </Text>
            <Text fontSize="12px" color="#b0b3b8">
              {date}
            </Text>
          </Box>
        </Flex>
        <Text marginTop="8px">{text}</Text>
      </Box>
      <Box
        display="grid"
        placeItems="center"
        marginTop="16px"
        backgroundColor="black"
        borderBottomLeftRadius="8px"
        borderBottomRightRadius="8px"
      >
        <img src={image} width="526px" height="526px" alt="imagem do post" />
      </Box>
    </Box>
  );
}
