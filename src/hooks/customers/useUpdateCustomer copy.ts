import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CACHE_KEY_CUSTOMERS } from "../../constants";
import customerService, { Customer } from "../../services/customerService";
import toast from "react-hot-toast";

interface UpdateCustomer {
  id: string;
  data: Customer;
}
const useUpdateCustomer = () => {
  const queryClient = useQueryClient();

  return useMutation<Customer, Error, UpdateCustomer>({
    mutationFn: ({ id, data }) => customerService.put(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: CACHE_KEY_CUSTOMERS });
      toast.success("Customer successfully updated!");
    },
    onError: () => {
      toast.error("Failed to update customer!");
    },
  });
};

export default useUpdateCustomer;
