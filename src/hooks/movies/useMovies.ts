import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_MOVIES } from "../../constants";
import type { Movie } from "../../services/movieService";
import movieService from "../../services/movieService";

interface useMoviesProps {
  selectedGenre: string;
  searchQuery: string;
  sortOrder: string;
}

const useMovies = ({
  selectedGenre,
  searchQuery,
  sortOrder,
}: useMoviesProps) => {
  const search = (searchQuery ?? "").trim();
  const order = sortOrder ?? "";
  const genre = selectedGenre ?? "";

  return useQuery<Movie[], Error>({
    queryKey: [...CACHE_KEY_MOVIES, { genre, search, order }],
    queryFn: () =>
      movieService.getAll({
        params: { genre, search, order },
      }),
  });
};

export default useMovies;
