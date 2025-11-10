import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { CACHE_KEY_USERS } from "../../constants";
import userService, { User } from "../../services/userService";

interface UpdateUser {
  id: string;
  data: User;
}

export const useUpdateUser = () => {
  const queryClient = useQueryClient();

  return useMutation<User, Error, UpdateUser>({
    mutationFn: ({ id, data }) => userService.put(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: CACHE_KEY_USERS });

      toast.success("User successfully updated!");
    },
    onError: () => {
      toast.error("Failed to update user");
    },
  });
};

export default useUpdateUser;
