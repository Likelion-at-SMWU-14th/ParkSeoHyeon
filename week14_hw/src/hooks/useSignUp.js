import { useMutation } from "@tanstack/react-query";
import { createUser } from "../api/users";

export const useSignUp = () => {
  return useMutation({
    mutationFn: createUser,
    onSuccess: () => {
      alert("환영합니다");
    },
  });
};
