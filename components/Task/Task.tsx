import { Checkbox, CheckboxProps } from '@chakra-ui/checkbox';
import { Badge, Box, HStack, Stack, Text } from '@chakra-ui/layout';
import { TaskProperties } from '../../services/task/taskList.types';

type TaskProps = Omit<TaskProperties, 'id'> & CheckboxProps;

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
  ...props
}: TaskProps) {
  const taskDifficulty = difficultyLabel[difficulty];
  const taskDeadline = new Date(deadline).toLocaleString().split(' ')[0];

  return (
    <HStack bg="whiteAlpha.200" borderRadius="8px" padding="16px">
      <Box display="grid" placeItems="center" minHeight="60px" mr={4}>
        <Checkbox size="lg" colorScheme="red" aria-label={title} {...props} />
      </Box>
      <Stack spacing={2}>
        <HStack>
          <Text fontWeight="bold">{title}</Text>
          <Text fontSize="xs">até {taskDeadline}</Text>
        </HStack>
        <Text fontSize="sm">{description}</Text>
        <Badge colorScheme={taskDifficulty.color} width="fit-content">
          {taskDifficulty.label}
        </Badge>
      </Stack>
    </HStack>
  );
}
