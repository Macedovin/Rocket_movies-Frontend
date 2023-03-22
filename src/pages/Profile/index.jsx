import { Container, Avatar, Form } from './styles';

import { HiOutlineArrowLeft } from 'react-icons/hi';

import { FiCamera, FiUser, FiMail, FiLock } from 'react-icons/fi';

import { Input } from '../../components/Input';

import { Button } from '../../components/Button'

export function Profile() {
  return(
    <Container>
      <header>
      <a href="/">
        <HiOutlineArrowLeft />
        Voltar
      </a>
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

        <Input 
          type="password"
          icon={FiLock}
          placeholder="Senha atual"
        />

        <Input 
          type="password"
          icon={FiLock}
          placeholder="Nova senha"
        />

        <Button title="Salvar" />

      </Form>
    </Container>
  );
}