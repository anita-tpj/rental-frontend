import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CACHE_KEY_MOVIES } from "../../constants";
import type { Movie } from "../../services/movieService";
import movieService from "../../services/movieService";

interface UpdateMovie {
  id: string;
  data: Movie
}
const useUpdateMovie = () => {
  const queryClient = useQueryClient();

  return useMutation<Movie, Error, UpdateMovie>({
    mutationFn:({id, data})=>movieService.put(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: CACHE_KEY_MOVIES });
    },
  });
};

export default useUpdateMovie;
