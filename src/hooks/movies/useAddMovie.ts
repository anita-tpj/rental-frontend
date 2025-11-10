import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CACHE_KEY_MOVIES } from "../../constants";
import type { Movie } from "../../services/movieService";
import movieService from "../../services/movieService";
import toast from "react-hot-toast";

const useAddMovie = (onAdd: () => void) => {
  const queryClient = useQueryClient();

  return useMutation<Movie, Error, Movie>({
    mutationFn: movieService.post,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: CACHE_KEY_MOVIES });
      onAdd();
      toast.success("Movie added successfully!");
    },
    onError: () => {
      toast.error("Failed to add movie.");
    },
  });
};

export default useAddMovie;
