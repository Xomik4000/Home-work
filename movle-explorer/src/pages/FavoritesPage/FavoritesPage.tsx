import { MovieGrid } from "../../components/MovieGrid/MovieGrid";
import { useFavorites } from "../../features/favorites/hooks/useFavorites";

export function FavoritesPage() {
  const { favorites, toggleFavorite } = useFavorites();

  if (favorites.length === 0) {
    return (
      <section>
        <h1>Избранные фильмы</h1>
        <p>У вас пока нет избранных фильмов.</p>
      </section>
    );
  }

  return (
    <section>
      <h1>Избранные фильмы</h1>

      <MovieGrid
        movies={favorites}
        favoriteMovieIds={favorites.map((movie) => movie.id)}
        onToggleFavorite={toggleFavorite}
      />
    </section>
  );
}
