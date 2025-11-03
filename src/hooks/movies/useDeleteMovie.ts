import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CACHE_KEY_MOVIES } from "../../constants";
import type { Movie } from "../../services/movieService";
import movieService from "../../services/movieService";

const useDeleteMovie = () => {
  const queryClient = useQueryClient();

  return useMutation<Movie, Error, string>({
    mutationFn: movieService.delete,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: CACHE_KEY_MOVIES });
    },
  });
};

export default useDeleteMovie;
