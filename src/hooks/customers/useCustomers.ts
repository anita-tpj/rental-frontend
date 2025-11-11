import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_CUSTOMERS } from "../../constants";
import type { Customer } from "../../services/customerService";
import customerService from "../../services/customerService";

const useCustomers = (search?: string) => {
  const q = (search ?? "").trim();
  
  return useQuery<Customer[], Error>({
    queryKey: [...CACHE_KEY_CUSTOMERS, { search: q || null }],

    queryFn: () =>
      customerService.getAll({
        params: q ? { search: q } : undefined,
      }),
  });
};

export default useCustomers;
