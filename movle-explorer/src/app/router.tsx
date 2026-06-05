import { createBrowserRouter } from 'react-router-dom';
import { ROUTES } from '../shared/constants/routes';
import { App } from './App';
import { HomePage } from '../pages/HomePage/HomePage';
import { FavoritesPage } from '../pages/FavoritesPage/FavoritesPage';
import { MovieDetailsPage } from '../pages/MovieDetailsPage/MovieDetailsPage';

export const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: ROUTES.FAVORITES,
        element: <FavoritesPage />,
      },
      {
        path: ROUTES.MOVIE_DETAILS,
        element: <MovieDetailsPage />,
      },
    ],
  },
]);