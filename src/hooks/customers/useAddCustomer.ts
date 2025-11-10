import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CACHE_KEY_CUSTOMERS } from "../../constants";
import customerService from "../../services/customerService";
import toast from "react-hot-toast";

const useAddCustomer = (onAdd: () => void) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: customerService.post,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: CACHE_KEY_CUSTOMERS });
      onAdd();
      toast.success("Customer successfully added!");
    },
    onError: () => {
      toast.error("Failed to add customer");
    },
  });
};

export default useAddCustomer;
