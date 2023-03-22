import { Container, Content, AboutUserMovies, NewMovie, Cards } from './styles';

import { FiPlus } from 'react-icons/fi'; 

import { Header } from '../../components/Header';

import { MovieCard } from '../../components/MovieCard';

export function Home() {
  return (
    <Container>
     <Header />
      
      <main>
        <Content>
        
          <AboutUserMovies>

            <h1>
              Meus filmes
            </h1>

            <NewMovie> 
              <FiPlus />
              Adicionar filme 
            </NewMovie>

          </AboutUserMovies>

          <Cards>

            <MovieCard 
              title="Interstellar"
              score={4}
              data={
                {
                  tags: [
                    {id: 1, name: "Ficção científica"},
                    {id: 2, name: "Drama"},
                    {id: 3, name: "Família"}
                  ],
            
                }
              }
            />
            <MovieCard 
              title= "Interstellar"
              score={4}
              data={
                {
                  
                  tags: [
                    {id: 1, name: "Ficção científica"},
                    {id: 2, name: "Drama"},
                    {id: 3, name: "Família"}
                  ]
                }
              }
            />
            <MovieCard 
              title= "Interstellar"
              score={4}
              data={
                {

                  tags: [
                    {id: 1, name: "Ficção científica"},
                    {id: 2, name: "Drama"},
                    {id: 3, name: "Família"}
                  ]
                }
              }
            />

<MovieCard 
              title= "Interstellar"
              score={4}
              data={
                {

                  tags: [
                    {id: 1, name: "Ficção científica"},
                    {id: 2, name: "Drama"},
                    {id: 3, name: "Família"}
                  ]
                }
              }
            />
          </Cards>
        </Content>
      </main>
    </Container>
  );
}