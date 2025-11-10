import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_MOVIES } from "../../constants";
import type { Movie } from "../../services/movieService";
import movieService from "../../services/movieService";

const useMovies = (genre?: string | undefined, searchQuery?: string) => {
  return useQuery<Movie[], Error>({
    queryKey: [...CACHE_KEY_MOVIES, { genre, searchQuery }],
    queryFn: () =>
      movieService.getAll({
        params: { genre, searchQuery },
      }),
  });
};

export default useMovies;
