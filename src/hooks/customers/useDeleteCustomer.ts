import { useMutation, useQueryClient } from '@tanstack/react-query';
import { CACHE_KEY_CUSTOMERS } from '../../constants';
import customerService from '../../services/customerService';

const useDeleteCustomer = () => {
    const queryClient = useQueryClient();
    
    return useMutation({
    mutationFn: customerService.delete,
    onSuccess: ()=> {
        queryClient.invalidateQueries({queryKey: CACHE_KEY_CUSTOMERS})
    }
  })
}

export default useDeleteCustomer
