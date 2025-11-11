import { Box, Card, Flex, Spinner } from "@radix-ui/themes";
import useCustomers from "../../hooks/customers/useCustomers";
import useDeleteCustomer from "../../hooks/customers/useDeleteCustomer";
import DeleteItem from "../DeleteItem";
import RentalFormCustomers from "../rentals/RentalFormCustomers";
import UpdateCustomer from "./UpdateCustomer";
import useAuth from "../../hooks/auth/useAuth";

interface CustomersListProps {
  searchQuery?: string;
}

export const CustomersList = ({ searchQuery }: CustomersListProps) => {
  const { data, error, isLoading } = useCustomers(searchQuery);
  const deleteCustomer = useDeleteCustomer();
  const { user } = useAuth();

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
          <Flex justify="between" align="start">
            <Box>
              <p>Name: {customer.name}</p>
              <p>Phone: {customer.phone}</p>
              <p>is Gold: {customer.isGold ? "Yes" : "No"}</p>
              <p>ID: {customer._id}</p>
            </Box>
            <Flex direction="column">
              <RentalFormCustomers
                customerId={customer._id!}
                customerName={customer.name}
              />
              {user && user?.isAdmin && (
                <Flex gap="2" className="mt-2">
                  <UpdateCustomer customer={customer} />
                  <DeleteItem
                    onDelete={() => deleteCustomer.mutate(customer._id!)}
                  />
                </Flex>
              )}
            </Flex>
          </Flex>
        </Card>
      ))}
    </Box>
  );
};

export default CustomersList;
