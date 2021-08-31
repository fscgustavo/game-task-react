import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Button,
  Input,
  Select,
  Stack,
  Textarea,
} from '@chakra-ui/react';

export function Form() {
  return (
    <Accordion bg="whiteAlpha.200" borderRadius="8px" mt={8} allowToggle>
      <AccordionItem border="none">
        <AccordionButton alignItems="center">
          Inserir nova tarefa
        </AccordionButton>
        <AccordionPanel>
          <form>
            <Stack spacing={4}>
              <Input
                placeholder="Qual tarefa será feita?"
                aria-label="Digite o título da tarefa a ser feita"
                size="lg"
              />
              <Textarea placeholder="Descrição da tarefa" size="lg" />
              <Select placeholder="Selecione a dificuldade" size="lg">
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
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}
