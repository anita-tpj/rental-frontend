import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_CUSTOMERS } from "../../constants";
import type { Customer } from "../../services/customerService";
import customerService from "../../services/customerService";

const useCustomers = (searchQuery: string) => {
  return useQuery<Customer[], Error>({
    queryKey: [...CACHE_KEY_CUSTOMERS, { searchQuery }],
    queryFn: () =>
      customerService.getAll({
        params: { searchQuery },
      }),
  });
};

export default useCustomers;
