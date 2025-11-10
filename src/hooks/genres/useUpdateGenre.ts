import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CACHE_KEY_GENRES } from "../../constants";
import genreService, { Genre } from "../../services/genreService";
import toast from "react-hot-toast";

interface UpdateGenre {
  id: string;
  data: Genre;
}

export const useUpdateGenre = () => {
  const queryClient = useQueryClient();

  return useMutation<Genre, Error, UpdateGenre>({
    mutationFn: ({ id, data }) => genreService.put(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: CACHE_KEY_GENRES });
      toast.success("Genre updated successfully!");
    },
    onError: () => {
      toast.error("Failed to update genre");
    },
  });
};

export default useUpdateGenre;
