import { Container, Content, AboutUserMovies, NewMovie, Cards } from './styles';

import { Header } from '../../components/Header';
import { MovieCard } from '../../components/MovieCard';

import { FiPlus } from 'react-icons/fi'; 

import { useData } from '../../hooks/data';

export function Home({}) {

  const { movies, setMovies } = useData();

  return (
    <Container>
     <Header />
      
      <main>
        <Content>
        
          <AboutUserMovies>

            <h1>
              Meus filmes
            </h1>

            <NewMovie to="/create_movie"> 
              <FiPlus />
              Adicionar filme 
            </NewMovie>

          </AboutUserMovies>

          <Cards>
            {
              movies && movies.map(movie => (

                <MovieCard 
                  key={String(movie.id)}
                  title={movie.title}
                  score={movie.score}
                  data={
                    {
                      description: movie.description,
                      tags: movie.tags,
                    }
                  }
                />
              ))
            }
          </Cards>
        </Content>
      </main>
    </Container>
  );
}