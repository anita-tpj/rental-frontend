import { useMutation } from "@tanstack/react-query";
import type { Auth } from "../../services/authService";
import authService from "../../services/authService";


const useLoginAuth = (onSuccess: () => void) =>
  useMutation<string, Error, Auth>({
    mutationFn: authService.post,
    onSuccess: (token) => {
      localStorage.setItem("token", token);
      onSuccess()
    },
  });

export default useLoginAuth;