import { useMutation, useQueryClient } from '@tanstack/react-query'
import { CACHE_KEY_CUSTOMERS } from '../../constants'
import customerService, { Customer } from '../../services/customerService'

interface UpdateCustomer {
  id: string,
  data: Customer
}
const useUpdateCustomer = () => {
    const queryClient = useQueryClient()
    
    return useMutation<Customer, Error, UpdateCustomer>({
    mutationFn: ({id, data})=> customerService.put(id, data),
    onSuccess: () => {
        queryClient.invalidateQueries({queryKey: CACHE_KEY_CUSTOMERS})
    }
  })
}

export default useUpdateCustomer
