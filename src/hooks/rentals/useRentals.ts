import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_RENTALS } from "../../constants";
import rentalService from "../../services/rentalService";

export const useRentals = (searchQuery: string) => {
  return useQuery({
    queryKey: [...CACHE_KEY_RENTALS, { searchQuery }],
    queryFn: () =>
      rentalService.getAll({
        params: { searchQuery },
      }),
  });
};

export default useRentals;
