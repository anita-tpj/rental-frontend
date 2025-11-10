import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CACHE_KEY_GENRES } from "../../constants";
import genreService from "../../services/genreService";
import toast from "react-hot-toast";

export const useAddGenre = (onAdd: () => void) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: genreService.post,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: CACHE_KEY_GENRES });
      onAdd();
      toast.success("Genre successfully added!");
    },
    onError: () => {
      toast.error("Failed to add genre!");
    },
  });
};

export default useAddGenre;
