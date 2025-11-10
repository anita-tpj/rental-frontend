import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CACHE_KEY_GENRES } from "../../constants";
import genreService from "../../services/genreService";
import { toast } from "react-hot-toast";

export const useDeleteGenre = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: genreService.delete,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: CACHE_KEY_GENRES });
      toast.success("Genre deleted successfully!");
    },
    onError: () => {
      toast.error("Failed to delete genre");
    },
  });
};

export default useDeleteGenre;
