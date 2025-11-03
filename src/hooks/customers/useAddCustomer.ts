import { useMutation, useQueryClient } from '@tanstack/react-query'
import { CACHE_KEY_CUSTOMERS } from '../../constants'
import customerService from '../../services/customerService'

const useAddCustomer = () => {
    const queryClient = useQueryClient()
    return useMutation({
    mutationFn: customerService.post,
    onSuccess: () => {
        queryClient.invalidateQueries({queryKey: CACHE_KEY_CUSTOMERS})
    }
  })
}

export default useAddCustomer
