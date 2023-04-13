import { Container, Form, Background } from './styles';

import { Input } from '../../components/Input';
import { PasswordInput } from '../../components/PasswordInput';
import { Button } from '../../components/Button';

import { FiMail, FiLock } from 'react-icons/fi';

import { Link } from 'react-router-dom';

import { useState } from 'react'; 

import { useAuth } from '../../hooks/auth';
 
export function SignIn() {

  const { signIn, user } = useAuth();

  const [email,setEmail] = useState("");

  const [password,setPassword] = useState("");

  function handleSignIn() {
    signIn({ email, password })
  }

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
          onChange={e => setEmail(e.target.value)}
        />

        <PasswordInput
          icon={FiLock} 
          placeholder="Senha"
          onChange={e => setPassword(e.target.value)}
        />

        <Button 
          title="Entrar"
          onClick={handleSignIn} 
        />

        <Link to="/register">
          Criar conta
        </Link>

      </Form>

      <Background />
    </Container>
  );
}