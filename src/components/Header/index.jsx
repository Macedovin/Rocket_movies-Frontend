import { Container, Brand, Search, Profile } from './styles';

import { Input } from '../Input';

import { ButtonText } from '../ButtonText';

export function Header() {
  return (
    <Container>
      <Brand>      
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
        <img src="https://github.com/Macedovin.png" alt="Foto do usuário" />
      </Profile>
    </Container>
  )
}