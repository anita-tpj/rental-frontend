import { Box, Button, Card, Flex } from "@radix-ui/themes";
import useCustomers from "../../hooks/customers/useCustomers";
import useDeleteCustomer from "../../hooks/customers/useDeleteCustomer";
import UpdateCustomer from "./UpdateCustomer";

export const CustomersList = () => {
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
    <Box>
      {data?.map((customer) => (
        <Card key={customer._id} className="my-4">
          <Flex justify="between" align="center">
            <Box>
              <p>Name: {customer.name}</p>
              <p>Phone: {customer.phone}</p>
              <p>is Gold: {customer.isGold ? "Yes" : "No"}</p>
              <p>ID: {customer._id}</p>
            </Box>
            <Flex gap="2">
              <Button
                onClick={() => {
                  deleteCustomer.mutate(customer._id!);
                }}
              >
                Delete
              </Button>
              <UpdateCustomer customer={customer} />
            </Flex>
          </Flex>
        </Card>
      ))}
    </Box>
  );
};

export default CustomersList;
