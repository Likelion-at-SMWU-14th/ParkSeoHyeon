import { useQuery } from "@tanstack/react-query";
import { fetchUser } from "../api/users";

export const useMyPage = (userId) => {
  return useQuery({
    queryKey: ["myPage", userId],
    queryFn: () => fetchUser(userId),
    staleTime: 30 * 1000,
    retry: 3,
  });
};
