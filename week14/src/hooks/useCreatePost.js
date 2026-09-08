import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createPost } from "../api/posts";

export const useCreatePost = () => {
  const queryClient = useQueryClient();
  console.log("데이터 변경 성공");

  return useMutation({
    mutationFn: createPost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });
};
