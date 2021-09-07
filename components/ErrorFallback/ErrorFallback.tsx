import { useToast } from '@chakra-ui/toast';
import { useEffect } from 'react';

export default function ErrorFallback() {
  const toast = useToast();

  useEffect(() => {
    toast({
      title: 'Não foi possível carregar suas tarefas',
      status: 'error',
      isClosable: true,
    });
  }, [toast]);

  return null;
}
