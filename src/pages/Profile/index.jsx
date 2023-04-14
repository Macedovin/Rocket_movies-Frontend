import { Container, Avatar, Form } from './styles';

import avatarPlaceholder from '../../assets/avatar_placeholder.svg';

import { Input } from '../../components/Input';
import { PasswordInput } from '../../components/PasswordInput';
import { Button } from '../../components/Button';

import { HiOutlineArrowLeft } from 'react-icons/hi';
import { FiCamera, FiUser, FiMail, FiLock } from 'react-icons/fi';

import { Link } from 'react-router-dom';

import { api } from '../../services/api'; 

import { useAuth } from '../../hooks/auth';

import { useState } from 'react';

export function Profile() {

  const { user, updateUserProfile } = useAuth();

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [passwordOld, setPasswordOld] = useState("");
  const [passwordNew, setPasswordNew] = useState("");

  const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

  const [avatar, setAvatar] = useState(avatarURL);
  const [avatarFile, setAvatarFile] = useState(null);

  async function handleUpdate() {
    const updatedInfos = {
      new_name: name,
      new_email: email,
      new_password: passwordNew,
      current_password: passwordOld 
    }

    await updateUserProfile({ user: updatedInfos, avatarFile });
  }

  function handleAvatarChange(event) {
    const file = event.target.files[0];

    setAvatarFile(file);

    const imagePreview = URL.createObjectURL(file);

    setAvatar(imagePreview);
  }

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
            src={avatar}
            alt="Foto do usuário" 
          />
          <label htmlFor="avatar">
            <FiCamera />

            <input 
              type="file"
              id="avatar"
              onChange={handleAvatarChange}
            />
          </label>
        </Avatar>

        <Input 
          type="text"
          icon={FiUser}
          placeholder="Nome"
          value={name}
          onChange={e => setName(e.target.value)}
        />

        <Input 
          type="email"
          icon={FiMail}
          placeholder="E-mail"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        
        <PasswordInput 
          icon={FiLock}
          placeholder="Senha atual"
          onChange={e => setPasswordOld(e.target.value)}
        />

        <PasswordInput 
          icon={FiLock}
          placeholder="Nova senha"
          onChange={e => setPasswordNew(e.target.value)}
        />

        <Button 
          title="Salvar"
          onClick={handleUpdate}
        />

      </Form>
    </Container>
  );
}