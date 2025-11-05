import { Box, Card, Flex } from "@radix-ui/themes";
import useDeleteUser from "../../hooks/users/useDeleteUser";
import useUsers from "../../hooks/users/useUsers";
import DeleteItem from "../DeleteItem";
import UpdateUser from "./UpdateUser";

const UsersList = () => {
  const { data, error, isLoading } = useUsers();
  const deleteUser = useDeleteUser();

  if (isLoading) return <p>Loading...</p>;
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
