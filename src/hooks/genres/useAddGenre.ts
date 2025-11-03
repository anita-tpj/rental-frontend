import { useMutation, useQueryClient } from '@tanstack/react-query';
import { CACHE_KEY_GENRES } from '../../constants';
import genreService from '../../services/genreService';

export const useAddGenre = (onAdd: () => void) => {
    const queryClient = useQueryClient();
    
    return useMutation({
        mutationFn:genreService.post,
        onSuccess:() => {
            queryClient.invalidateQueries({ queryKey: CACHE_KEY_GENRES })
            onAdd()
        }
    })
  
}

export default useAddGenre;
