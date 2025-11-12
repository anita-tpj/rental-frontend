import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_CUSTOMERS } from "../../constants";
import type { Customer } from "../../services/customerService";
import customerService from "../../services/customerService";

interface useCustomersProps {
  searchQuery?: string;
  page: number;
  pageSize: number;
}

const useCustomers = ({ searchQuery, page, pageSize }: useCustomersProps) => {
  const search = (searchQuery ?? "").trim();

  return useQuery<Customer[], Error>({
    queryKey: [...CACHE_KEY_CUSTOMERS, { search, page, pageSize }],

    queryFn: () =>
      customerService.getAll({
        params: {
          ...(search ? { search } : {}),
          _start: (page - 1) * pageSize,
          _limit: pageSize,
        },
      }),
    placeholderData: (prev) => prev,
  });
};

export default useCustomers;
