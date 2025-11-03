import { Box, Button, Card, Flex } from "@radix-ui/themes";
import UserForm from "../components/users/UserForm";
import useDeleteUser from "../hooks/users/useDeleteUser";
import useUsers from "../hooks/users/useUsers";
import SubTitle from "../components/SubTitle";

const UsersPage = () => {
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
    <Flex
      gap="8"
      justify="between"
      direction={{ initial: "column", md: "row" }}
    >
      <Box width={{ initial: "100%", md: "50%" }}>
        <SubTitle subTitle="Add new user to list" />
        <UserForm />
      </Box>

      <Box width={{ initial: "100%", md: "50%" }}>
        <SubTitle subTitle="Users" />
        {data?.map((user) => (
          <Card key={user._id} className="my-4">
            <Flex justify="between" align="center">
              <Box>
                <p>Name: {user.userName}</p>
                <p>Email: {user.email}</p>
                <p>Admin: {user.isAdmin ? "Yes" : "No"}</p>
              </Box>
              <Button
                onClick={() => {
                  deleteUser.mutate(user._id!);
                }}
              >
                Delete
              </Button>
            </Flex>
          </Card>
        ))}
      </Box>
      {/* <Link to="/movies/movie-form">Add new customer to list</Link>
      <Outlet /> */}
    </Flex>
  );
};

export default UsersPage;
