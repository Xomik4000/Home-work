import { useEffect, useState } from "react";
import type { Movie } from "../../movies/types/movie.types";

const FAVORITES_STORAGE_KEY = "movie-explorer:favorites";

export function useFavorites() {
  const [favorites, setFavorites] = useState<Movie[]>(() => {
    const savedFavorites = localStorage.getItem(FAVORITES_STORAGE_KEY);

    if (!savedFavorites) {
      return [];
    }

    try {
      return JSON.parse(savedFavorites) as Movie[];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(favorites));
  }, [favorites]);

  const isFavorite = (movieId: number) => {
    return favorites.some((movie) => movie.id === movieId);
  };

  const toggleFavorite = (movie: Movie) => {
    setFavorites((currentFavorites) => {
      if (currentFavorites.some((item) => item.id === movie.id)) {
        return currentFavorites.filter((item) => item.id !== movie.id);
      }

      return [...currentFavorites, movie];
    });
  };

  return {
    favorites,
    isFavorite,
    toggleFavorite,
  };
}
