import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteUser } from "../api/users";

export const useDeleteUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteUser,
    onSuccess: () => {
      alert("성공적으로 삭제되었습니다.");

      queryClient.invalidateQueries({
        queryKey: ["myPage"],
      });
    },
  });
};
