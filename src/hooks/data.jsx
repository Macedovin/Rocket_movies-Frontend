/* import { createContext, useContext, useState } from 'react';

import { api } from '../services/api';
 
export const DataContext = createContext();

function DataProvider({ children }) {

  const [movies, setMovies] = useState([]);

  const [anotherMovieData, setAnotherMovieData] = useState({});

  async function fetchAnotherMovie(response) {
    const anotherMovie_id = response.data[0].id;
    
    const anotherMovie = await api.get(`/movie_notes/${anotherMovie_id}`);
    
    // const formattedDate = anotherMovie.data.created_at.replace(' ', ' às ').replace(/-/g, '/'); 

    console.log("20 - Data => ", anotherovie)
    
    return anotherMovie.data;
  }

  async function fetchMovies(search) {
    // try { 

      const response = await api.get(`/movie_notes?title=${search}`);

      if (response.data.length === 1) {
        
        // console.log("Data => Deu certo, passo 2!", response.data.length); 

      fetchAnotherMovie(response);

        // console.log("Só um filme!", anotherMovieData); 

        //  } catch(error) {
        if(error.response) {
          alert(error.response.data.message);
        } else {
          alert("Nenhum filme com este título foi encontrado!");
        } 

      }

      setMovies(response.data);
  
      console.log("Data => Deu certo, passo 1!", response.data, response.data.length, anotherMovieData);
      
    return { movies, setMovies, anotherMovieData };
  }

  return(
    <DataContext.Provider value={{
        fetchMovies,
        movies,
        fetchAnotherMovie,
        anotherMovieData,
        setAnotherMovieData
      }}
    >
      {children}
    </DataContext.Provider>
  )
}

function useData() {
  const context = useContext(DataContext);

  return context;
}

export { DataProvider, useData }; */