import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CACHE_KEY_USERS } from "../../constants";
import userService from "../../services/userService";
import toast from "react-hot-toast";

export const useAddUser = (onAdd: () => void) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: userService.post,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: CACHE_KEY_USERS });
      onAdd();
      toast.success("User successfully added!");
    },
    onError: () => {
      toast.error("Failed to add user");
    },
  });
};

export default useAddUser;
