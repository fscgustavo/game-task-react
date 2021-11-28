import { useState } from 'react';
import {
  Flex,
  Heading,
  Input,
  Button,
  InputGroup,
  Stack,
  Box,
  Link,
  Avatar,
  FormControl,
  FormHelperText,
  InputRightElement,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { useLoginMutation } from '../../services/login/login';

type LoginObject = {
  email: string;
  password: string;
};

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const mutation = useLoginMutation();

  const { register, handleSubmit, reset } = useForm<LoginObject>();

  const handleShowClick = () => setShowPassword((prevState) => !prevState);

  const onSubmit = (data: LoginObject) => {
    reset();

    const body = {
      UserName: data.email,
      Password: data.password,
      grant_type: 'password',
    };

    mutation.mutate(body);
  };

  return (
    <Flex
      flexDirection="column"
      width="100wh"
      height="100vh"
      justifyContent="center"
      alignItems="center"
    >
      <Stack
        flexDir="column"
        mb="2"
        bg="whiteAlpha.200"
        borderRadius="0.25rem"
        justifyContent="center"
        alignItems="center"
        padding="0.5rem"
      >
        <Avatar bg="teal.500" />
        <Heading color="teal.400">Bem-vindo(a)</Heading>
        <Box width="max(17.5rem, 40vw)">
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={4} p="1rem">
              <FormControl>
                <InputGroup>
                  <Input
                    type="email"
                    placeholder="email address"
                    {...register('email', {
                      required: true,
                    })}
                  />
                </InputGroup>
              </FormControl>
              <FormControl>
                <InputGroup>
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Senha"
                    {...register('password', {
                      required: true,
                    })}
                  />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                      {showPassword ? 'Esconder' : 'Visualizar'}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <FormHelperText textAlign="right">
                  <Link>Esqueceu sua senha?</Link>
                </FormHelperText>
              </FormControl>
              <Button
                borderRadius={0}
                type="submit"
                variant="solid"
                colorScheme="teal"
                width="full"
              >
                Login
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>
      <Box>
        É sua primeira vez aqui? <Link href="#">Cadastre-se</Link>
      </Box>
    </Flex>
  );
}
