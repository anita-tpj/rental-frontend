import { Box, Card, Flex, Spinner } from "@radix-ui/themes";
import { useState } from "react";
import useUsers from "../../hooks/users/useUsers";
import Pagination from "../Pagination";

const UsersList = () => {
  const pageSize = 5;
  const [page, setPage] = useState(1);
  const { data, error, isLoading } = useUsers({ page, pageSize });
  const total = data?.total ?? 0;
  const hasNext = page * pageSize < total;
  //const deleteUser = useDeleteUser();

  if (isLoading)
    return (
      <Flex align="center" justify="center" className="h-{500px}">
        <Spinner size="3" />
      </Flex>
    );
  if (error)
    return (
      <p>
        Error loading users 😢 <br /> {error.message}
      </p>
    );
  return (
    <Box>
      {data?.items?.map((user) => (
        <Card key={user._id} className="my-4">
          <Flex justify="between" align="start">
            <Box>
              <p>Name: {user.userName}</p>
              <p>Email: {user.email}</p>
              <p>Admin: {user.isAdmin ? "Yes" : "No"}</p>
            </Box>
            {/* <Flex gap="2">
              <UpdateUser user={user} />
              <DeleteItem onDelete={() => deleteUser.mutate(user._id!)} />
            </Flex> */}
          </Flex>
        </Card>
      ))}
      {(page > 1 || hasNext) && (
        <Pagination
          hasNext={hasNext}
          page={page}
          onNext={() => setPage((page) => page + 1)}
          onPrev={() => setPage((page) => page - 1)}
        />
      )}
    </Box>
  );
};

export default UsersList;
