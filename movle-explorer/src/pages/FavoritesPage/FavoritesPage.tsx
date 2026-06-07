import { MovieGrid } from "../../components/MovieGrid/MovieGrid";
import { useFavorites } from "../../features/favorites/hooks/useFavorites";

export function FavoritesPage() {
  const { favorites, toggleFavorite } = useFavorites();

  if (favorites.length === 0) {
    return (
      <section>
        <h1>Favorite movies</h1>
        <p>You have no favorite movies yet.</p>
      </section>
    );
  }

  return (
    <section>
      <h1>Favorite movies</h1>

      <MovieGrid
        movies={favorites}
        favoriteMovieIds={favorites.map((movie) => movie.id)}
        onToggleFavorite={toggleFavorite}
      />
    </section>
  );
}
