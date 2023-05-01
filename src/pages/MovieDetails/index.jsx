import { Container, Content, MovieContent, MovieInfos, UserInfos } from './styles';

import { Header } from '../../components/Header';
import { Rating } from '../../components/Rating';
import { Tag } from '../../components/Tag'; 

import { CiClock2 } from 'react-icons/ci';
import { HiOutlineArrowLeft } from 'react-icons/hi';

import { Link, useParams, useNavigate } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';

/* import { useData } from '../../hooks/data'; */

import { api } from '../../services/api';

import { useState, useEffect } from 'react';

export function MovieDetails({ title, score }) {
  /* const { anotherMovieData } = useData(); */
  
  const navigate = useNavigate();

  const { user } = useAuth();

  const useRouteParams = useParams();

  const [search, setSearch] = useState("");

  const [data, setData] = useState(null);

  console.log("33 -> Apresentando o filme ", useRouteParams, data);

  function handlePage(pageId) {
    navigate(`/movie_details/${pageId}`);
  }  

  useEffect(() => {

    async function fetchAnotherMovie() {

      const newResponse = await api.get(`/movie_notes?title=${search}`);

      console.log("45 -> Pesquisando por filmes", newResponse.data);      

      if(newResponse.data.length > 0 && search !== "")  {

        const anotherMovie_id = newResponse.data[0].id;
      
        const anotherMovie = await api.get(`/movie_notes/${anotherMovie_id}`);
  
        const formattedDate = anotherMovie.data.created_at.replace(' ', ' às ').replace(/-/g, '/'); 
  
        console.log(`55 - Só tenho um filme: ${anotherMovie.data.id} e o search esta preenchido: ${search}`, );
          
        setData({...anotherMovie.data, created_at: formattedDate});
        
        useRouteParams.id = anotherMovie.data.id;

        handlePage(anotherMovie.data.id);

        console.log("63 -> Filme encontrado", anotherMovie.data);
      
      }

    }  

    fetchAnotherMovie();

  },[search]); 

  useEffect(() => {

    async function fetchMovie() {
      const response = await api.get(`/movie_notes/${useRouteParams.id}`);
  
      const formattedDate = response.data.created_at.replace(' ', ' às ').replace(/-/g, '/');     
      
      setData({ ...response.data, created_at: formattedDate });
  
      useRouteParams.id = response.data.id;
  
      handlePage(response.data.id);
      
      console.log("86 -> ", useRouteParams);
  
    }

    fetchMovie();

  },[]);

  return(
    <Container>
      <Header 
        onChange={e => setSearch(e.target.value)}
      />
      
      <main>
        <Content>
        
          <Link to="/">
            <HiOutlineArrowLeft />
            Voltar
          </Link>

          {
          
            data &&

            <MovieContent>
                    
              <MovieInfos>

                <Rating data={
                    {
                      title: data.title,
                      score: data.score
                    }
                  }  
                />
      

                <UserInfos>

                  <img src="https://github.com/Macedovin.png" alt="Foto do usuário" />
                  <p>
                    Por {user.name}
                  </p>

                  <CiClock2 />
                  <p>{data.created_at}</p>
                </UserInfos>

                <div className="tags">
                  {
                    data.tags.map(tag => (

                      <Tag
                        key={String(tag.id)}
                        title={tag.name}
                      />
                    ))
                  }

                </div>
          
              </MovieInfos>
                {
                  <p>
                    {data.description}
                  </p>
                }
              
            </MovieContent>
          }

        </Content>
      </main>
    </Container>
  );
}