import { Checkbox } from '@chakra-ui/checkbox';
import { Badge, Box, HStack, Stack, Text } from '@chakra-ui/layout';
import { HTMLAttributes } from 'react';
import { TaskProperties } from '../../services/task/taskList.types';

type TaskProps = Omit<TaskProperties, 'id'> & HTMLAttributes<HTMLDivElement>;

const difficultyLabel: Record<string, string> = {
  '1': 'Fácil',
  '2': 'Médio',
  '3': 'Difícil',
};

export default function Task({
  title,
  description,
  difficulty,
  deadline,
}: TaskProps) {
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
          {difficultyLabel[difficulty]}
        </Badge>
      </Stack>
    </HStack>
  );
}
