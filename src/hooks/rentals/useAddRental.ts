import { useMutation, useQueryClient } from '@tanstack/react-query'
import rentalService, { NewRental, Rental } from '../../services/rentalService'
import { CACHE_KEY_RENTALS } from '../../constants'

const useAddRental = (onAdd: () => void) => {
    const queryClient = useQueryClient()
    return useMutation<Rental, Error, NewRental>({
    mutationFn: rentalService.post,
    onSuccess: () => {
        queryClient.invalidateQueries({queryKey: CACHE_KEY_RENTALS})
        onAdd();
    }
  })
}

export default useAddRental
