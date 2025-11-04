import { Flex } from "@radix-ui/themes";
import SubTitle from "../components/SubTitle";
import CustomerForm from "../components/customers/CustomerForm";
import CustomersList from "../components/customers/CustomersList";

const CustomersPage = () => {
  return (
    <>
      <Flex
        justify="between"
        align="center"
        className="border-b border-b-indigo-500 mb-5"
      >
        <SubTitle subTitle="Customers" />
        <CustomerForm />
      </Flex>
      <CustomersList />
      {/* <Link to="/movies/movie-form">Add new customer to list</Link>
      <Outlet /> */}
    </>
  );
};

export default CustomersPage;
