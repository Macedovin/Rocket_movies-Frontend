import { Container, Brand, Search, Profile, Avatar } from './styles';

import { Input } from '../Input';

import { ButtonText } from '../ButtonText';

export function Header() {
  return (
    <Container>
      <Brand to="/">      
        <h1>RocketMovies</h1>
      </Brand>

      <Search>
        <Input 
          placeholder="Pesquisar pelo título"
        />
      </Search>

      <Profile>

        <div>
          <strong>
              Vinicius Macedo
          </strong>
          <ButtonText title="sair" />
        </div>

        <Avatar to="/profile">
          <img src="https://github.com/Macedovin.png" alt="Foto do usuário" />
        </Avatar>
      
      </Profile>
    </Container>
  )
}