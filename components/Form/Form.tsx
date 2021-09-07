import { AddIcon } from '@chakra-ui/icons';
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
  FormErrorMessage,
  FormControl,
  FormLabel,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { useTaskMutation } from '../../services/task/taskList';
import { TaskProperties } from '../../services/task/taskList.types';

export function Form() {
  const mutation = useTaskMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TaskProperties>();

  const onSubmit = (data: TaskProperties) => {
    reset();

    const body = {
      titulo: data.title,
      descricao: data.description,
      dataFim: new Date(data.deadline).toISOString(),
      nivelDificuldade: data.difficulty,
    };

    mutation.mutate(body);
  };

  return (
    <Accordion
      bg="whiteAlpha.200"
      borderRadius="8px"
      allowToggle
      defaultIndex={[0]}
    >
      <AccordionItem border="none">
        <AccordionButton alignItems="center">
          <AddIcon mr={4} />
          Inserir nova tarefa
        </AccordionButton>
        <AccordionPanel>
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <Stack spacing={4}>
              <FormControl id="title" isInvalid={Boolean(errors.title)}>
                <Input
                  placeholder="Qual tarefa será feita?"
                  aria-label="Título da tarefa"
                  size="lg"
                  autoComplete="off"
                  {...register('title', {
                    required: 'O campo tarefa é obrigatório',
                  })}
                />
                <FormErrorMessage>{errors.title?.message}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={Boolean(errors.description)}>
                <Textarea
                  placeholder="Descrição da tarefa"
                  aria-label="Detalhes da tarefa"
                  size="lg"
                  maxLength={150}
                  {...register('description')}
                />
                <FormErrorMessage>
                  {errors.description?.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={Boolean(errors.difficulty)}>
                <Select
                  placeholder="Selecione a dificuldade"
                  aria-label="Dificuldade da tarefa"
                  size="lg"
                  defaultValue="facil"
                  {...register('difficulty', {
                    required: 'O campo dificuldade é obrigatório',
                  })}
                >
                  <option value="facil">Fácil</option>
                  <option value="medio">Médio</option>
                  <option value="dificil">Difícil</option>
                </Select>
                <FormErrorMessage>
                  {errors.difficulty?.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={Boolean(errors.deadline)}>
                <FormLabel>Prazo</FormLabel>
                <Input
                  type="date"
                  size="lg"
                  {...register('deadline', {
                    required: 'O campo data é obrigatório',
                  })}
                />
                <FormErrorMessage>{errors.deadline?.message}</FormErrorMessage>
              </FormControl>
              <Button
                type="submit"
                bg="primary"
                size="lg"
                isLoading={mutation.isLoading}
              >
                Registrar
              </Button>
            </Stack>
          </form>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}
