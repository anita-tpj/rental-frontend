import { useMutation, useQueryClient } from '@tanstack/react-query';
import { CACHE_KEY_GENRES } from '../../constants';
import genreService, { Genre } from '../../services/genreService';

interface UpdateGenre {
  id: string;
  data: Genre;
}

export const useUpdateGenre = (onUpdate: ()=>void) => {
    const queryClient = useQueryClient();
    
    return useMutation<Genre, Error, UpdateGenre>({
        mutationFn: ({ id, data }) => genreService.put(id, data),
        onSuccess:() => {
            queryClient.invalidateQueries({ queryKey: CACHE_KEY_GENRES })
            onUpdate()
        }
    })
  
}

export default useUpdateGenre;
