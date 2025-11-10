import { useMutation, useQueryClient } from "@tanstack/react-query";
import rentalService, { NewRental, Rental } from "../../services/rentalService";
import { CACHE_KEY_RENTALS } from "../../constants";
import toast from "react-hot-toast";

interface UpdateRental {
  id: string;
  data: NewRental;
}

const useUpdateRental = () => {
  const queryClient = useQueryClient();
  return useMutation<Rental, Error, UpdateRental>({
    mutationFn: ({ id, data }) => rentalService.put(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: CACHE_KEY_RENTALS });
      toast.success("Rental successfully updated!");
    },
    onError: () => {
      toast.error("Failed to update rental");
    },
  });
};

export default useUpdateRental;
