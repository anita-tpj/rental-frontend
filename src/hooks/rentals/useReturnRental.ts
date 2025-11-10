import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CACHE_KEY_RENTALS } from "../../constants";
import returnService, { NewRental } from "../../services/returnService";
import { Rental } from "../../services/rentalService";
import toast from "react-hot-toast";

const useReturnRental = () => {
  const queryClient = useQueryClient();
  return useMutation<Rental, Error, NewRental>({
    mutationFn: returnService.post,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: CACHE_KEY_RENTALS });
      toast.success("Return successfully proceed!");
    },
    onError: () => {
      toast.error("Failed to proceed return");
    },
  });
};

export default useReturnRental;
