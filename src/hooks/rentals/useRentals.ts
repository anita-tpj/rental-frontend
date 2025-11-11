import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_RENTALS } from "../../constants";
import rentalService from "../../services/rentalService";

export const useRentals = (search: string) => {
  const q = (search ?? "").trim();

  return useQuery({
    queryKey: [...CACHE_KEY_RENTALS, { search: q || null }],
    queryFn: () =>
      rentalService.getAll({
        params: q ? { search: q } : undefined,
      }),
  });
};

export default useRentals;
