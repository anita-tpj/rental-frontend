import { Box, Card, Flex, Spinner } from "@radix-ui/themes";
import useDeleteUser from "../../hooks/users/useDeleteUser";
import useUsers from "../../hooks/users/useUsers";

const UsersList = () => {
  const { data, error, isLoading } = useUsers();
  const deleteUser = useDeleteUser();

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
      {data?.map((user) => (
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
    </Box>
  );
};

export default UsersList;
