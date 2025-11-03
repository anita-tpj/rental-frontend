import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CACHE_KEY_MOVIES } from "../../constants";
import type { Movie } from "../../services/movieService";
import movieService from "../../services/movieService";

const useAddMovie = (onAdd: () => void) => {
  const queryClient = useQueryClient();

  return useMutation<Movie, Error, Movie>({
    mutationFn: movieService.post,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: CACHE_KEY_MOVIES });
      onAdd();
    },
  });
};

export default useAddMovie;
