import { useMutation } from "@tanstack/react-query";
import type { Auth } from "../../services/authService";
import authService from "../../services/authService";
import toast from "react-hot-toast";

const useLoginAuth = (onSuccess: (token: string) => void, onAuth: () => void) =>
  useMutation<string, Error, Auth>({
    mutationFn: authService.post,
    onSuccess: (token) => {
      onSuccess(token);
      onAuth();
      toast.success("Successfully logged in!");
    },
    onError: () => {
      toast.error("Failed to log in");
    },
  });

export default useLoginAuth;
