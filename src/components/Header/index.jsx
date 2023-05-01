import { Container, Brand, Search, Profile, Avatar } from './styles';

import { Input } from '../Input';
import { ButtonText } from '../ButtonText';

import avatarPlaceholder from '../../assets/avatar_placeholder.svg';

/* import { useParams } from 'react-router-dom'; */

import { api } from '../../services/api';

import { useState } from 'react';

import { useAuth } from '../../hooks/auth';

/* import { useData } from '../../hooks/data'; */

export function Header({ onChange, ...rest }) {
  
/*   const params = useParams(); */

  const { user, signOut } = useAuth();
  
/*   const { fetchMovies } = useData() */

/*   const [search, setSearch] = useState(""); */

/*   const [data, setData] = useState(null); */

  const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

/*   useEffect(() => {
    async function fetchAnotherMovie() {
      
      const response = await api.get(`/movie_notes/${params.id}`);

      const formattedDate = response.data.created_at.replace(' ', ' às ').replace(/-/g, '/');
      
      setData({ ...response.data, created_at: formattedDate });

      console.log("Outro filme, fui chamado...");
    }

    fetchAnotherMovie()

  },[search]) */

/*   useEffect(() => {

    fetchMovies(search);

    console.log("Efeito do header")
    
  },[search]);  */

  return (
    <Container>
      <Brand to="/">      
        <h1>RocketMovies</h1>
      </Brand>

      <Search>
        <Input 
          placeholder="Pesquisar pelo título"
          onChange={onChange}
          {...rest}
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