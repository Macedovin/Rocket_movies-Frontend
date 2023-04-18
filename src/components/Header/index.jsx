import { Container, Brand, Search, Profile, Avatar } from './styles';

import { Input } from '../Input';
import { ButtonText } from '../ButtonText';

import avatarPlaceholder from '../../assets/avatar_placeholder.svg';

import { api } from '../../services/api';

import { useEffect, useState } from 'react';

import { useAuth } from '../../hooks/auth';
import { useData } from '../../hooks/data';

export function Header() {
  
  const { user, signOut } = useAuth();
  
  const { fetchMovies } = useData()

  const [search, setSearch] = useState("");

  const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

  useEffect(() => {

    fetchMovies(search);
    
  },[search]); 

  return (
    <Container>
      <Brand to="/">      
        <h1>RocketMovies</h1>
      </Brand>

      <Search>
        <Input 
          placeholder="Pesquisar pelo título"
          onChange={e => setSearch(e.target.value)}
        />
      </Search>

      <Profile>

        <div>
          <strong>
              {user.name}
          </strong>
          <ButtonText 
            title="sair"
            onClick={signOut}
          />
        </div>

        <Avatar to="/profile">
          <img src={avatarURL} alt="Foto do usuário" />
        </Avatar>
      
      </Profile>
    </Container>
  )
}