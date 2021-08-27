import { Box, Button, Input, Select } from '@chakra-ui/react';

export function Form() {
  return (
    <Box>
      <Input
        placeholder="Qual tarefa será feita?"
        aria-label="Digite o título da tarefa a ser feita"
        size="lg"
      />
      <Select placeholder="Select option">
        <option value="1">Fácil</option>
        <option value="2">Médio</option>
        <option value="3">Difícil</option>
      </Select>
      <Button type="submit" colorScheme="teal" size="lg">
        Button
      </Button>
    </Box>
  );
}
