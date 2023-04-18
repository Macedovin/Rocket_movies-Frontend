import { createContext, useContext, useState } from 'react';

import { api } from '../services/api';
 
export const DataContext = createContext();

function DataProvider({ children }) {
  const [movies, setMovies] = useState([]);

  async function fetchMovies(search) {
    const response = await api.get(`/movie_notes?title=${search}`)
      
    console.log(movies)

    setMovies(response.data);

    return { movies, setMovies };
  }

  return(
    <DataContext.Provider value={{
        fetchMovies,
        movies,
        setMovies 
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

export { DataProvider, useData };