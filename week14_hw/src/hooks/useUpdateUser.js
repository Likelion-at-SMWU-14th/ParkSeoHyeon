import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateUser } from "../api/users";

export const useUpdateUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateUser,
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: ["myPage", variables.userId],
      });
    },
  });
};
