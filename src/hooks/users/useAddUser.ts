import { useMutation, useQueryClient } from '@tanstack/react-query';
import { CACHE_KEY_USERS } from '../../constants';
import userService from '../../services/userService';

export const useAddUser = () => {
    const queryClient = useQueryClient();
    
    return useMutation({
        mutationFn:userService.post,
        onSuccess:() => {
            queryClient.invalidateQueries({ queryKey: CACHE_KEY_USERS })
        }
    })
  
}

export default useAddUser;
