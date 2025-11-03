import { Box, Button, Card, Flex } from "@radix-ui/themes";
import CustomerForm from "../components/customers/CustomerForm";
import useCustomers from "../hooks/customers/useCustomers";
import useDeleteCustomer from "../hooks/customers/useDeleteCustomer";
import SubTitle from "../components/SubTitle";

const CustomersPage = () => {
  const { data, error, isLoading } = useCustomers();
  const deleteCustomer = useDeleteCustomer();

  if (isLoading) return <p>Loading...</p>;
  if (error)
    return (
      <p>
        Error loading customers 😢 <br /> {error.message}
      </p>
    );

  return (
    <Flex
      gap="8"
      justify="between"
      direction={{ initial: "column", md: "row" }}
    >
      <Box width={{ initial: "100%", md: "50%" }}>
        <SubTitle subTitle="Add new customer to list" />
        <CustomerForm />
      </Box>

      <Box width={{ initial: "100%", md: "50%" }}>
        <SubTitle subTitle="Customers" />
        {data?.map((customer) => (
          <Card key={customer._id} className="my-4">
            <Flex justify="between" align="center">
              <Box>
                <p>Name: {customer.name}</p>
                <p>Phone: {customer.phone}</p>
                <p>is Gold: {customer.isGold ? "Yes" : "No"}</p>
                <p>ID: {customer._id}</p>
              </Box>
              <Button
                onClick={() => {
                  deleteCustomer.mutate(customer._id!);
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

export default CustomersPage;
