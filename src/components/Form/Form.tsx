import { Button, Input, Select, Stack, Textarea } from '@chakra-ui/react';

export function Form() {
  return (
    <form>
      <Stack spacing={4}>
        <Input
          placeholder="Qual tarefa será feita?"
          aria-label="Digite o título da tarefa a ser feita"
          size="lg"
        />
        <Textarea placeholder="Descrição da tarefa" size="lg" />
        <Select placeholder="Select option" size="lg">
          <option value="1" selected>
            Fácil
          </option>
          <option value="2">Médio</option>
          <option value="3">Difícil</option>
        </Select>
        <Input type="date" size="lg" />
        <Button type="submit" bg="primary" size="lg">
          Registrar
        </Button>
      </Stack>
    </form>
  );
}
