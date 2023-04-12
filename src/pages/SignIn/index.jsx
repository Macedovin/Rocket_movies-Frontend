import { Container, Form, Background } from './styles';

import { Input } from '../../components/Input';
import { PasswordInput } from '../../components/PasswordInput';
import { Button } from '../../components/Button';

import { FiMail, FiLock } from 'react-icons/fi';

import { Link } from 'react-router-dom';


 
export function SignIn() {

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
          Faça seu login
        </h2>

        <Input
          type="email" 
          icon={FiMail} 
          placeholder="E-mail"
        />

        <PasswordInput
          icon={FiLock} 
          placeholder="Senha"
        />

        <Button title="Entrar" />

        <Link to="/register">
          Criar conta
        </Link>

      </Form>

      <Background />
    </Container>
  );
}