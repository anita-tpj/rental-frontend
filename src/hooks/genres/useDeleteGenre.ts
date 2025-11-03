import { useMutation, useQueryClient } from '@tanstack/react-query';
import { CACHE_KEY_GENRES } from '../../constants';
import genreService from '../../services/genreService';

export const useDeleteGenre = () => {
    const queryClient = useQueryClient();

    return useMutation({
    mutationFn: genreService.delete,
    onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: CACHE_KEY_GENRES });
    },
  })
}


export default useDeleteGenre;
