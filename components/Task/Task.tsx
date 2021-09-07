import { Checkbox } from '@chakra-ui/checkbox';
import { Badge, Box, HStack, Stack, Text } from '@chakra-ui/layout';
import { HTMLAttributes } from 'react';
import { TaskProperties } from '../../services/task/taskList.types';

type TaskProps = Omit<TaskProperties, 'id'> & HTMLAttributes<HTMLDivElement>;

type Difficulty = {
  label: string;
  color: string;
};

const difficultyLabel: Record<string, Difficulty> = {
  facil: {
    label: 'Fácil',
    color: 'green',
  },
  medio: {
    label: 'Médio',
    color: 'blue',
  },
  dificil: {
    label: 'Difícil',
    color: 'red',
  },
};

export default function Task({
  title,
  description,
  difficulty,
  deadline,
}: TaskProps) {
  const taskDifficulty = difficultyLabel[difficulty];

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
        <Badge colorScheme={taskDifficulty.color} width="fit-content">
          {taskDifficulty.label}
        </Badge>
      </Stack>
    </HStack>
  );
}
