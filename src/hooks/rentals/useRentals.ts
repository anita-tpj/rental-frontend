import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_RENTALS } from "../../constants";
import rentalService from "../../services/rentalService";

export const useRentals = () => {
  return useQuery({
    queryKey: CACHE_KEY_RENTALS,
    queryFn: rentalService.getAll
  })
}

export default useRentals;
