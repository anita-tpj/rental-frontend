import { Flex } from "@radix-ui/themes";
import SubTitle from "../components/SubTitle";
import CustomerForm from "../components/customers/CustomerForm";
import CustomersList from "../components/customers/CustomersList";
import { useState } from "react";
import SeachInput from "../components/SeachInput";

const CustomersPage = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  return (
    <>
      <Flex
        justify="between"
        align="center"
        className="border-b border-b-indigo-500 mb-5 pb-1"
      >
        <SubTitle subTitle="Customers" />
        <CustomerForm />
      </Flex>
      <SeachInput onSearch={(query) => setSearchQuery(query)} />
      <CustomersList searchQuery={searchQuery} />
      {/* <Link to="/movies/movie-form">Add new customer to list</Link>
      <Outlet /> */}
    </>
  );
};

export default CustomersPage;
