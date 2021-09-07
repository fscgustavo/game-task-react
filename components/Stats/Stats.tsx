import { Box, HStack, Stack, Text } from '@chakra-ui/layout';
import { Progress } from '@chakra-ui/progress';
import Image from 'next/image';

export default function Stats() {
  return (
    <HStack bg="whiteAlpha.200" borderRadius="8px" padding="8px 24px">
      <Image
        src="/protoman.png"
        height="120"
        width="120"
        alt="imagem de perfil do protoman"
      />
      <Stack spacing="4px" width="100%">
        <Text fontWeight="bold">Protoman</Text>
        <Box maxWidth="320px">
          <HStack spacing="8px">
            <Image
              src="/heart.png"
              height="20px"
              width="20px"
              alt="coração (vida)"
            />
            <Progress
              value={100}
              width="100%"
              maxWidth="236px"
              borderRadius="4px"
              colorScheme="red"
            />
            <Text fontSize="sm">100/100</Text>
          </HStack>
          <HStack spacing="8px">
            <Image
              src="/star.png"
              height="17px"
              width="17px"
              alt="estrela (experiência)"
            />
            <Progress
              value={25}
              width="100%"
              maxWidth="236px"
              borderRadius="4px"
              colorScheme="yellow"
            />
            <Text fontSize="sm">50/200</Text>
          </HStack>
        </Box>
      </Stack>
    </HStack>
  );
}
