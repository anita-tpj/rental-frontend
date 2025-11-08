import { Flex } from "@radix-ui/themes";
import SubTitle from "../components/SubTitle";
import UserForm from "../components/users/UserForm";
import UsersList from "../components/users/UsersList";

const UsersPage = () => {
  return (
    <>
      <Flex
        justify="between"
        align="center"
        className="border-b border-b-indigo-500 mb-5 pb-1"
      >
        <SubTitle subTitle="Users" />
        <UserForm />
      </Flex>
      <UsersList />
      {/* <Link to="/movies/movie-form">Add new customer to list</Link>
      <Outlet /> */}
    </>
  );
};

export default UsersPage;
