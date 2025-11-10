import { useMutation, useQueryClient } from "@tanstack/react-query";
import rentalService, { NewRental, Rental } from "../../services/rentalService";
import { CACHE_KEY_RENTALS } from "../../constants";
import toast from "react-hot-toast";

const useAddRental = (onAdd: () => void) => {
  const queryClient = useQueryClient();
  return useMutation<Rental, Error, NewRental>({
    mutationFn: rentalService.post,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: CACHE_KEY_RENTALS });
      onAdd();
      toast.success("New rental successfully created!");
    },
    onError: () => {
      toast.error("Failed to create new rental");
    },
  });
};

export default useAddRental;
