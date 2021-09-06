import { Checkbox } from '@chakra-ui/checkbox';
import { Badge, Box, HStack, Stack, Text } from '@chakra-ui/layout';
import { TaskProperties } from '../../services/taskList/taskLIst.types';

export default function Task({
  title,
  description,
  difficulty,
  deadline,
}: TaskProperties) {
  return (
    <HStack bg="whiteAlpha.200" borderRadius="8px" padding="16px">
      <Box display="grid" placeItems="center" minHeight="60px" mr={4}>
        <Checkbox size="lg" colorScheme="red" aria-label={title} />
      </Box>
      <Stack spacing={2}>
        <HStack>
          <Text fontWeight="bold">{title}</Text>
          <Text fontSize="xs">até {deadline}</Text>
        </HStack>
        <Text fontSize="sm">{description}</Text>
        <Badge colorScheme="green" width="fit-content">
          Fácil
        </Badge>
      </Stack>
    </HStack>
  );
}
