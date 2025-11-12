import { Box, Card, Flex } from "@radix-ui/themes";
import useCustomers from "../../hooks/customers/useCustomers";
import useDeleteCustomer from "../../hooks/customers/useDeleteCustomer";
import DeleteItem from "../DeleteItem";
import RentalFormCustomers from "../rentals/RentalFormCustomers";
import UpdateCustomer from "./UpdateCustomer";
import useAuth from "../../hooks/auth/useAuth";
import CustomersListSkeleton from "./CustomerListSkeleton";
import Pagination from "../Pagination";
import { useEffect, useState } from "react";

interface CustomersListProps {
  searchQuery?: string;
}

export const CustomersList = ({ searchQuery }: CustomersListProps) => {
  const { user } = useAuth();
  const pageSize = 10;
  const [page, setPage] = useState(1);

  useEffect(() => {
    setPage(1);
  }, [searchQuery]);

  const deleteCustomer = useDeleteCustomer();

  const { data, error, isLoading } = useCustomers({
    searchQuery,
    page,
    pageSize,
  });
  const hasNext = data?.length === pageSize;

  if (isLoading) return <CustomersListSkeleton />;
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
      {(page > 1 || hasNext) && (
        <Pagination
          hasNext={hasNext}
          page={page}
          onNext={() => setPage((page) => page + 1)}
          onPrev={() => setPage((page) => page - 1)}
        />
      )}
    </Box>
  );
};

export default CustomersList;
