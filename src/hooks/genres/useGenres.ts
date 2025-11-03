import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_GENRES } from "../../constants";
import type { Genre } from "../../services/genreService";
import genreService from "../../services/genreService";

const useGenres = () => {
  return useQuery<Genre[], Error>({
    queryKey: CACHE_KEY_GENRES,
    queryFn: genreService.getAll,
    staleTime: 10 * 1000,
  });
};

export default useGenres;
