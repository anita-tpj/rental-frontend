import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_RENTALS } from "../../constants";
import rentalService from "../../services/rentalService";

interface useRentalsProps {
  searchQuery?: string;
  page: number;
  pageSize: number;
}

export const useRentals = ({
  searchQuery,
  page,
  pageSize,
}: useRentalsProps) => {
  const search = (searchQuery ?? "").trim();

  return useQuery({
    queryKey: [...CACHE_KEY_RENTALS, { search, page, pageSize }],
    queryFn: () =>
      rentalService.getAll({
        params: {
          ...(search ? { search } : {}),
          _start: (page - 1) * pageSize,
          _limit: pageSize,
        },
      }),
  });
};

export default useRentals;
