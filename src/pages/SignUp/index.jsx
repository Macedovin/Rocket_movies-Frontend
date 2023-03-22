import { Container, Form, Background } from './styles';

import { Link } from 'react-router-dom';

import { FiUser, FiMail, FiLock, FiArrowLeft } from 'react-icons/fi';

import { Input } from '../../components/Input';

import { Button } from '../../components/Button';
 
export function SignUp() {
  return (
    <Container>
      
      <Form>
        <h1>
          RocketMovies
        </h1>

        <p>
          Aplicação para acompanhar tudo que assistir.
        </p>

        <h2>
          Crie sua conta
        </h2>

        <Input
          type="text" 
          icon={FiUser} 
          placeholder="Nome"
        />

        <Input
          type="email" 
          icon={FiMail} 
          placeholder="E-mail"
        />

        <Input
          type="password" 
          icon={FiLock} 
          placeholder="Senha"
        />

        <Button title="Cadastrar" />

        <Link to="/">
          <FiArrowLeft />
          Voltar para o login
        </Link>

      </Form>

      <Background />
    </Container>
  );
}