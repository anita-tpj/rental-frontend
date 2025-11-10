import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CACHE_KEY_USERS } from "../../constants";
import userService from "../../services/userService";
import toast from "react-hot-toast";

const useDeleteUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: userService.delete,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: CACHE_KEY_USERS });
      toast.success("User deleted successfully!");
    },
    onError: () => {
      toast.error("Failed to delete user");
    },
  });
};

export default useDeleteUser;
