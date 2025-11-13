import { Flex } from "@radix-ui/themes";
import SubTitle from "../components/SubTitle";
import UserForm from "../components/users/UserForm";
import UsersList from "../components/users/UsersList";
import useAuth from "../hooks/auth/useAuth";

const UsersPage = () => {
  const { user } = useAuth();
  const isSuperAdmin = user && user?.role === "Super Admin";
  return (
    <>
      <Flex
        justify="between"
        align="center"
        className="border-b border-b-indigo-500 mb-5 pb-1"
      >
        <SubTitle subTitle="Users" />
        {isSuperAdmin && <UserForm />}
      </Flex>
      <UsersList />
    </>
  );
};

export default UsersPage;
