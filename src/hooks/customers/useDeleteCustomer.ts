import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CACHE_KEY_CUSTOMERS } from "../../constants";
import customerService from "../../services/customerService";
import toast from "react-hot-toast";

const useDeleteCustomer = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: customerService.delete,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: CACHE_KEY_CUSTOMERS });
      toast.success("Customer deleted successfully!");
    },
    onError: () => {
      toast.error("Failed to delete customer");
    },
  });
};

export default useDeleteCustomer;
