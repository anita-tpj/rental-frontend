import { useMutation } from "@tanstack/react-query";
import type { Auth } from "../../services/authService";
import authService from "../../services/authService";

const useLoginAuth = (onSuccess: (token: string) => void, onAuth: () => void) =>
  useMutation<string, Error, Auth>({
    mutationFn: authService.post,
    onSuccess: (token) => {
      onSuccess(token);
      onAuth();
    },
  });

export default useLoginAuth;
