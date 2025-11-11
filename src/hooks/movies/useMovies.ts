import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_MOVIES } from "../../constants";
import type { Movie } from "../../services/movieService";
import movieService from "../../services/movieService";

const useMovies = (genre?: string | undefined, search?: string) => {
  const q = (search ?? "").trim();

  return useQuery<Movie[], Error>({
    queryKey: [...CACHE_KEY_MOVIES, { genre, search: q || null }],
    queryFn: () =>
      movieService.getAll({
        params: { genre, search },
      }),
  });
};

export default useMovies;
