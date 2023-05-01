import { Container, Content, AboutUserMovies, NewMovie, Cards } from './styles';

import { Header } from '../../components/Header';
import { MovieCard } from '../../components/MovieCard';

import { FiPlus } from 'react-icons/fi'; 

import { api } from '../../services/api'; 

import { useNavigate } from 'react-router-dom';

import { useState, useEffect } from 'react';

/* import { useData } from '../../hooks/data'; */

export function Home({}) {

  const [search, setSearch] = useState("");

  const [movies, setMovies] = useState([]);

  /* const { movies } = useData(); */

  const navigate = useNavigate();

  function handleMovieDetails(id) {

    navigate(`/movie_details/${id}`);
  
  }

  useEffect(() => {
    
    async function fetchMovies() {

      const response = await api.get(`/movie_notes?title=${search}`);
      
      setMovies(response.data);

      console.log(response.data);

    }
    
    fetchMovies();

  },[search])

  return (
    <Container>
      <Header 
        onChange={e => setSearch(e.target.value)}
      />
      
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
                  onClick={() => handleMovieDetails(movie.id)}
                />
              ))
            }
          </Cards>
        </Content>
      </main>
    </Container>
  );
}