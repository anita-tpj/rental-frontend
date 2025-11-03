import { useMutation, useQueryClient } from '@tanstack/react-query';
import { CACHE_KEY_USERS } from '../../constants';
import userService from '../../services/userService';

const useDeleteUser = () => {
    const queryClient = useQueryClient();

    return useMutation({
    mutationFn: userService.delete,
    onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: CACHE_KEY_USERS });
    },
  })
}

export default useDeleteUser;
