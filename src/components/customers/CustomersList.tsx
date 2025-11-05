import { Box, Card, Flex, Spinner } from "@radix-ui/themes";
import useCustomers from "../../hooks/customers/useCustomers";
import useDeleteCustomer from "../../hooks/customers/useDeleteCustomer";
import DeleteItem from "../DeleteItem";
import UpdateCustomer from "./UpdateCustomer";

export const CustomersList = () => {
  const { data, error, isLoading } = useCustomers();
  const deleteCustomer = useDeleteCustomer();

  if (isLoading)
    return (
      <Flex align="center" justify="center" className="h-{500px}">
        <Spinner size="3" />
      </Flex>
    );
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
              <UpdateCustomer customer={customer} />
              <DeleteItem
                onDelete={() => deleteCustomer.mutate(customer._id!)}
              />
            </Flex>
          </Flex>
        </Card>
      ))}
    </Box>
  );
};

export default CustomersList;
