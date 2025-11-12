import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_USERS } from "../../constants";
import userService, { type User } from "../../services/userService";

interface useUsersProps {
  page: number;
  pageSize: number;
}

type UsersPage = { items: User[]; total: number };

const useUsers = (query: useUsersProps) => {
  
  return useQuery<UsersPage, Error>({
    queryKey: [...CACHE_KEY_USERS, query],
    queryFn: () =>
      userService.getPage({
        params: {
          _start: (query.page - 1) * query.pageSize,
          _limit: query.pageSize,
        },
      }),
    placeholderData: (previousData) => previousData,
  });
};

export default useUsers;
