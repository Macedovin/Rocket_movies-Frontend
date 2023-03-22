import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { CreateMovie } from '../pages/CreateMovie';
import { MovieDetails } from '../pages/MovieDetails';
import { Profile } from '../pages/Profile';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create_movie" element={<CreateMovie />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/movie_details/:id" element={<MovieDetails />} />
    </Routes>
  );
} 