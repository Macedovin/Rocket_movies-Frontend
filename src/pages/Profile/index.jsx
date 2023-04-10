import { Container, Avatar, Form } from './styles';

import { Input } from '../../components/Input';
import { PasswordInput } from '../../components/PasswordInput';
import { Button } from '../../components/Button';

import { HiOutlineArrowLeft } from 'react-icons/hi';
import { FiCamera, FiUser, FiMail, FiLock } from 'react-icons/fi';

import { Link } from 'react-router-dom';

export function Profile() {
  return(
    <Container>
      <header>
      <Link to="/">
        <HiOutlineArrowLeft />
        Voltar
      </Link>
      </header>

      <Form>
        <Avatar>
          <img 
            src="https://github.com/Macedovin.png"
            alt="Foto do usuário" 
          />
          <label htmlFor="avatar">
            <FiCamera />

            <input 
              type="file"
              id="avatar"
            />
          </label>
        </Avatar>

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

        
        <PasswordInput 
          icon={FiLock}
          placeholder="Senha atual"
        />

        <PasswordInput 
          icon={FiLock}
          placeholder="Nova senha"
        />

        <Button title="Salvar" />

      </Form>
    </Container>
  );
}