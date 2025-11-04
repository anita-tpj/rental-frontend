import { useMutation, useQueryClient } from '@tanstack/react-query'
import rentalService, { NewRental, Rental } from '../../services/rentalService'
import { CACHE_KEY_RENTALS } from '../../constants'

interface UpdateRental{
  id: string;
  data: NewRental;
}

const useUpdateRental = () => {
    const queryClient = useQueryClient()
    return useMutation<Rental, Error, UpdateRental>({
    mutationFn:({id, data})=> rentalService.put(id, data),
    onSuccess: () => {
        queryClient.invalidateQueries({queryKey: CACHE_KEY_RENTALS})
    }
  })
}

export default useUpdateRental
